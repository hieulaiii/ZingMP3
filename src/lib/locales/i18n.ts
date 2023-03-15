import i18n from 'i18next';
//import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import layoutEn from '@/lib/locales/en/layout.json';
import layout from '@/lib/locales/vi/layout.json';
import common from '@/lib/locales/vi/common.json';

const defaultNS = 'layout';
export const resources = {
    vi: {
        layout,
        common,
    },
    en: {
        layoutEn,
    },
} as const;

i18n.use(initReactI18next).init({
    lng: 'vi',
    ns: ['layout', 'common'],
    defaultNS,
    resources,
});

export default i18n;
