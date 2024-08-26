import { enUS, es } from 'date-fns/locale';
import { format } from 'date-fns';

import { LocaleKey } from './i18n';

const locales = {
  en: enUS,
  es: es,
};

export const formattedDate = (date: Date, locale: LocaleKey = 'es') => {
  return format(date, 'MMM, yyyy', { locale: locales[locale] });
};
