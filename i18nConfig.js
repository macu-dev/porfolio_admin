const i18nConfig = {
  locales: ['es', 'en'],
  defaultLocale: 'es',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos/',
      },
    ],
  },
};

module.exports = i18nConfig;
