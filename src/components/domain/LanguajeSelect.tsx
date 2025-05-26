'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';

import i18nConfig from '../../../i18nConfig';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const ArgFlag = dynamic(() => import('./ArgFlag'), {
  ssr: false,
  loading: () => <div className="h-4 w-6 animate-pulse rounded bg-gray-700" />,
});
const UsaFlag = dynamic(() => import('./UsaFlag'), {
  ssr: false,
  loading: () => <div className="h-4 w-6 animate-pulse rounded bg-gray-700" />,
});

export default function LanguageChanger() {
  const { i18n, t } = useTranslation();

  const currentLocale = i18n.language;

  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (newLocale: string) => {
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();

    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();

    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.locales) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`),
      );
    }

    router.refresh();
  };

  return (
    <Select onValueChange={handleChange} value={currentLocale}>
      <SelectTrigger>
        <SelectValue placeholder={t('languagePlaceholder')} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="es">
            <ArgFlag />
          </SelectItem>
          <SelectItem value="en">
            <UsaFlag />
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
