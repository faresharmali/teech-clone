import { notFound } from "next/navigation";
import { getRequestConfig } from 'next-intl/server';

const locales: string[] = ['en', 'de'];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./src/content/${locale}.json`)).default
  };
});