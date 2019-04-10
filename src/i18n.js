// @flow

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import { translationEN, testEN } from './locales/en'
import { translationUA, testUA } from './locales/ua'
import { translationDE, testDE } from './locales/de'

// the translations
const resources = {
  en: {
    translation: translationEN,
    test: testEN,
  },
  ua: {
    translation: translationUA,
    test: testUA,
  },
  de: {
    translation: translationDE,
    test: testDE,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'en',
    // lng: 'en',
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export const language = i18n.language

export const changeLanguage = (language: string) =>
  i18n.changeLanguage(language)

export default i18n
