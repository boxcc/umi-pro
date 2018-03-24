import React from 'react';
import Redirect from 'umi/redirect';

export default () => {
  return <Redirect exact from="/form/step-form" to="/form/step-form/info" />;
};
