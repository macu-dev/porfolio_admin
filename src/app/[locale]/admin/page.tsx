import initTranslations from '@/app/i18n';
import LoginForm from '@/components/domain/LoginForm';
import TranslationsProvider from '@/components/domain/TranslationProvider';

const i18nNamespaces = ['login'];

const AdminPage = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      locale={locale}
      namespaces={i18nNamespaces}
      resources={resources}
    >
      <section className=" flex h-full w-full items-center justify-center bg-gradient-to-r via-white">
        <LoginForm />
      </section>
    </TranslationsProvider>
  );
};

export default AdminPage;
