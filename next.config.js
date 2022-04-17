// const withPWA = require('next-pwa');
// const runtimeCaching = require('next-pwa/cache');

module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['ru', 'fi'],
    defaultLocale: 'fi',
    localeDetection: false,
  },
  images: {
    domains: ['www.datocms-assets.com', 'zpckit.s3.amazonaws.com'],
  },
};
// module.exports = withPWA({
//   reactStrictMode: true,
//   pwa: {
//     dest: 'public',
//     register: true,
//     skipWaiting: true,
//     runtimeCaching,
//     disable: process.env.NODE_ENV === 'development',
//   },
//   i18n: {
//     locales: ['ru', 'fi'],
//     defaultLocale: 'fi',
//     localeDetection: false,
//   },
//   images: {
//     domains: ['www.datocms-assets.com'],
//   },
// });
