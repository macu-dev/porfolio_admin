'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import i18nConfig from '../../../i18nConfig';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  //   onValueChange={(value) => onChange({ target: { name, value } })}

  const handleChange = (newLocale: string) => {
    // const newLocale = event.target.value;

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
    // <select onChange={handleChange} value={currentLocale}>
    //   <option value="en">English</option>
    //   <option value="es">Es</option>
    // </select>
    <Select onValueChange={handleChange} value={currentLocale}>
      <SelectTrigger>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="es">🇦🇷</SelectItem>
          <SelectItem value="en">🇺🇸</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
