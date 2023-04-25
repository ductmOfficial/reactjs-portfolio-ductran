import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const MainWrapper = ({ children, pageTitle = '' }) => {
  useEffect(() => {
    console.log('pageTitle', pageTitle);
  }, [pageTitle]);

  return (
    <React.Fragment>
      <Helmet title={pageTitle} />
      {children}
    </React.Fragment>
  );
};

MainWrapper.propTypes = {
  children: PropTypes.node,
  pageTitle: PropTypes.string,
};

export default MainWrapper;
