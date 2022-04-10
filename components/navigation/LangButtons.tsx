import { useRouter } from 'next/router';
import { useStore } from '@Hooks/useStore';
import { LangButton } from './LangButton';

export const LangButtons = () => {
  const { languages } = useStore();
  const { asPath } = useRouter();

  const langs = languages.map(lang => {
    return <LangButton key={lang} lang={lang} path={asPath} />;
  });
  return (
    <div className="languages">
      {langs} <span className="selected-lang" />
    </div>
  );
};
