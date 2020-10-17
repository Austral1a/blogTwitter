import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import {initReactI18next} from 'react-i18next'
import XHR from 'i18next-xhr-backend'
import langEN from './locate/en/translate.json'
import langRU from './locate/ru/translate.json'

i18n
    .use(XHR)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: langEN,
            ru: langRU
        },
        // default language when load website
        lng: 'en',
        // default language if react-i18next not finding any language
        fallbackLng: 'en',
        debug: true,
        // string or array of namespaces to load
        ns: ['translations'],
        // default namespace used if not passed to translation function
        defaultNS: 'translations',
        interpolation: {
            // mitigate XSS attacks
            escapeValue: false,
            //
            formatSeparator: ","
        },
        react: {
            wait: true,
            bindI18n: 'languageChanged loaded',
            bindStore: 'added removed',
            nsMode: 'default'
        }
    })

export default i18n
