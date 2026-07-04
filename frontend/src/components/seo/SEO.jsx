import { Helmet } from "react-helmet-async";

const SITE_NAME = "Burdwan Scan Centre";
const SITE_URL = "https://burdwanscancentre.com";
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`; // Replace later if you create a dedicated OG image

function SEO({
  title,
  description,
  keywords = "",
  image = DEFAULT_IMAGE,
  url = "",
}) {
  const pageTitle = title || SITE_NAME;

  const canonicalUrl = `${SITE_URL}${url}`;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{pageTitle}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="keywords"
        content={keywords}
      />

      <meta
        name="robots"
        content="index, follow"
      />

      <link
        rel="canonical"
        href={canonicalUrl}
      />

      {/* Open Graph */}
      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:site_name"
        content={SITE_NAME}
      />

      <meta
        property="og:title"
        content={pageTitle}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={canonicalUrl}
      />

      <meta
        property="og:image"
        content={image}
      />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={pageTitle}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={image}
      />
    </Helmet>
  );
}

export default SEO;