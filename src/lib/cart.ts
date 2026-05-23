// Mi Mesa — client-side cart, backed by localStorage.
//
// Vanilla TS, no framework dependency. Designed for Astro <script> tags;
// every function is SSR-safe (typeof window guard).
//
// Lines are uniquely identified by (itemId, priceLabel) so dual-priced items
// (Az / Tam) live on separate lines. Display fields (name, price, image) are
// frozen at add-time for UI; the API revalidates prices server-side.

export interface CartLine {
	itemId: string;
	slug: string;
	name: string;
	image: string;
	price: number;
	priceLabel: string | null;
	qty: number;
}

const KEY = 'mimesa_cart_v1';
const MAX_LINES = 50;
const MAX_QTY = 99;
const CHANGE_EVENT = 'mimesa:cart:change';

function isBrowser(): boolean {
	return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
}

function lineKey(itemId: string, priceLabel: string | null): string {
	return priceLabel ? `${itemId}|${priceLabel}` : itemId;
}

export function readCart(): CartLine[] {
	if (!isBrowser()) return [];
	try {
		const raw = localStorage.getItem(KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		if (!Array.isArray(parsed)) return [];
		return parsed.filter(
			(l: unknown): l is CartLine =>
				typeof l === 'object' &&
				l !== null &&
				typeof (l as CartLine).itemId === 'string' &&
				typeof (l as CartLine).qty === 'number' &&
				(l as CartLine).qty > 0
		);
	} catch {
		return [];
	}
}

function writeCart(lines: CartLine[]): void {
	if (!isBrowser()) return;
	localStorage.setItem(KEY, JSON.stringify(lines));
	window.dispatchEvent(new CustomEvent(CHANGE_EVENT));
}

export function addLine(line: Omit<CartLine, 'qty'>, qty = 1): void {
	if (!isBrowser()) return;
	const cart = readCart();
	const k = lineKey(line.itemId, line.priceLabel);
	const existing = cart.find((l) => lineKey(l.itemId, l.priceLabel) === k);
	if (existing) {
		existing.qty = Math.min(MAX_QTY, existing.qty + qty);
	} else {
		if (cart.length >= MAX_LINES) return;
		cart.push({ ...line, qty: Math.min(MAX_QTY, qty) });
	}
	writeCart(cart);
}

export function setQty(itemId: string, priceLabel: string | null, qty: number): void {
	if (!isBrowser()) return;
	const cart = readCart();
	const k = lineKey(itemId, priceLabel);
	const next = cart
		.map((l) => (lineKey(l.itemId, l.priceLabel) === k ? { ...l, qty } : l))
		.filter((l) => l.qty > 0);
	writeCart(next);
}

export function removeLine(itemId: string, priceLabel: string | null): void {
	setQty(itemId, priceLabel, 0);
}

export function clearCart(): void {
	if (!isBrowser()) return;
	localStorage.removeItem(KEY);
	window.dispatchEvent(new CustomEvent(CHANGE_EVENT));
}

export function cartCount(): number {
	return readCart().reduce((sum, l) => sum + l.qty, 0);
}

export function cartTotal(): number {
	return readCart().reduce((sum, l) => sum + l.qty * l.price, 0);
}

export function onCartChange(cb: () => void): () => void {
	if (!isBrowser()) return () => {};
	const handler = () => cb();
	window.addEventListener(CHANGE_EVENT, handler);
	// Cross-tab updates via the storage event.
	window.addEventListener('storage', (e) => {
		if (e.key === KEY) handler();
	});
	return () => {
		window.removeEventListener(CHANGE_EVENT, handler);
	};
}
