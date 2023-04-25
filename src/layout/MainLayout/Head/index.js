import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

// project imports
import config from 'config';

const Head = ({ title, description }) => {
  const { pathname, origin } = window.location;
  const siteUrl = origin;
  const defaultTitle = config.seo.siteName || 'Heureka Business Solutions';
  const defaultDescription = config.seo.description || '';

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet title={title} defaultTitle={seo.title} titleTemplate={`%s | ${defaultTitle}`}>
      <html lang="en" />

      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default Head;

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Head.defaultProps = {
  title: null,
  description: null,
};
