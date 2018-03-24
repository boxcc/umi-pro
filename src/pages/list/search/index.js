import React from 'react';
import Redirect from 'umi/redirect';

export default () => {
  return <Redirect exact from="/list/search" to="/list/search/projects" />;
};
