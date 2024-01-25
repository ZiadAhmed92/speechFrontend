// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import languageEN from './en.json'; // استخدام المتغيرات للاستيراد
import languageAR from './ar.json'; // استخدام المتغيرات للاستيراد

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    supportedLngs: ['en', 'ar'],
    resources: {
      en: {
        translation: languageEN, // استخدام المتغير
      },
      ar: {
        translation: languageAR, // استخدام المتغير
      },
    },
    backend: {
      loadPath: '/locales/{{lng}}.json',
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
