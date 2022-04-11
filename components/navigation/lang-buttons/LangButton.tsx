import { useRouter } from 'next/router';

export const LangButton = ({ path, lang }: { path: string; lang: string }) => {
  const { push, locale } = useRouter();
  return (
    <button
      className={`${lang === locale ? 'nav-lang active' : 'nav-lang'}`}
      onClick={() => {
        push(`${path}`, `${path}`, { locale: lang });
      }}
    >
      {lang}
    </button>
  );
};
