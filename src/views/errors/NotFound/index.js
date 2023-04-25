import { Helmet } from 'react-helmet-async';

// project imports
import PageWrapper from 'components/PageWrapper';

function NotFound() {
  return (
    <PageWrapper pageTitle="Page Not Found">
      <Helmet title="Not Found" />
      <div>Page Not Found</div>
    </PageWrapper>
  );
}

export default NotFound;
