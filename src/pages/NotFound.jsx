import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LangContext';

export default function NotFound() {
  const { t } = useLang();
  return (
    <section className="section">
      <div className="container-slim text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-2 text-gray-600">{t('notFound.title')}</p>
        <Link to="/" className="mt-6 inline-block rounded-full bg-brand px-4 py-2 text-white">
          {t('notFound.backHome')}
        </Link>
      </div>
    </section>
  );
}
