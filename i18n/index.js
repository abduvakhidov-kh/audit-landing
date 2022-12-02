const ru = require('./translations.ru.json');
const uz = require('./translations.uz.json');

const i18n = {
  translations: {
    uz: uz.i18n,
    ru: ru.i18n,
  },
  defaultLang: 'uz',
  useBrowserDefault: true,
};

module.exports = i18n;
