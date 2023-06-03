import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const MainWrapper = ({ children, pageTitle = '' }) => (
  <React.Fragment>
    <Helmet title={pageTitle} />
    {children}
  </React.Fragment>
);

MainWrapper.propTypes = {
  children: PropTypes.node,
  pageTitle: PropTypes.string,
};

export default MainWrapper;
