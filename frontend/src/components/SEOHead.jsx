import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://shareiarislam.vercel.app';
const DEFAULT_IMAGE = `${SITE_URL}/assets/android-chrome-192x192.png`;
const SITE_NAME = 'Shareiar Islam Portfolio';

const SEOHead = ({ title, description, image, url, type = 'website' }) => {
  const fullTitle = title
    ? `${title} | Shareiar Islam`
    : 'Shareiar Islam | Full-Stack Developer Portfolio';

  const metaDescription =
    description ||
    'Hi, I\'m Shareiar Islam, a Full-Stack MERN developer specializing in React, Node.js, and MongoDB. Explore my projects, skills, and professional experience.';

  const metaImage = image || DEFAULT_IMAGE;
  const metaUrl = url || SITE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={metaUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
    </Helmet>
  );
};

export default SEOHead;
