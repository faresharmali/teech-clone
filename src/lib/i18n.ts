import { createSharedPathnamesNavigation } from 'next-intl/navigation';

const localePrefix = 'as-needed';

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: 'Nextjs Starter',
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  localePrefix,
};
export const { usePathname, useRouter } = createSharedPathnamesNavigation({
  locales: ['en', 'de'],
  localePrefix,
});