import '@babel/polyfill';
import 'url-polyfill';

// import dynamic from 'umi/dynamic';

// // Import i18n messages
// import { translationMessages } from './i18n';

// // Chunked polyfill for browsers without Intl support
// if (!window.Intl) {
//   (new Promise((resolve) => {
//     resolve(import('intl'));
//   }))
//     .then(() => Promise.all([
//       import('intl/locale-data/jsonp/en.js'),
//       import('intl/locale-data/jsonp/de.js'),
//     ]))
//     .then(() => render(translationMessages))
//     .catch((err) => {
//       throw err;
//     });
// } else {
//   render(translationMessages);
// }
