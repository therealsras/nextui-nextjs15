// import useAppStore from '@/hooks/useAppStore';
import {getRequestConfig} from 'next-intl/server';
 
export type Locale = (typeof locales)[number];

export const locales = ['en', 'km'] as const;
export const defaultLocale: Locale = 'en';

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = 'en'
 
  return {
    locale,
    messages: (await import(`../public/i18n/${locale}.json`)).default,
    timeZone: 'Asia/Phnom_Penh'
  };
});
