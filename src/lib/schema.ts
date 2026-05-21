import type { Locale } from './i18n';

const SITE = 'https://mimesarestoran.com';

export function restaurantSchema(lang: Locale) {
  const name = lang === 'ar' ? 'مي ميسا' : 'Mi Mesa';
  const description =
    lang === 'tr'
      ? 'Mezopotamya köy mutfağının modern yorumu. Mi Mesa fine dining restoranı.'
      : lang === 'en'
        ? 'A modern reading of Mesopotamian village cuisine. Mi Mesa fine dining restaurant.'
        : 'قراءة حديثة لمطبخ القرية الرافديني. مطعم مي ميسا للذواقة.';

  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${SITE}#restaurant`,
    name,
    alternateName: 'Mi Mesa',
    url: SITE,
    description,
    image: [`${SITE}/og-image.jpg`],
    logo: `${SITE}/logo.png`,
    telephone: '+905308219685',
    priceRange: '$$$',
    servesCuisine: ['Turkish', 'Anatolian', 'Mediterranean', 'Fine Dining'],
    acceptsReservations: 'True',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Meşelik Mah., Muğla-Bodrum Yolu',
      addressLocality: 'Milas',
      addressRegion: 'Muğla',
      postalCode: '48670',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.268537,
      longitude: 27.768183,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    sameAs: [
      'https://www.instagram.com/mimesarestoran',
      'https://wa.me/905308219685',
    ],
  };
}
