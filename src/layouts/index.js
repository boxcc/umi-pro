import React from 'react';
import pathToRegexp from 'path-to-regexp';
import BasicLayout from 'layouts/BasicLayout';
// import BlankLayout from 'layouts/BlankLayout';
// import PageHeaderLayout from 'layouts/PageHeaderLayout';
// import UserLayout from 'layouts/UserLayout';
import StepFormLayout from 'layouts/StepFormLayout';
import withRouter from 'umi/withRouter';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

export default withRouter(({ children, location, ...restProps }) => {
  const { pathname } = window.location;
  let LayoutComponent;
  if (pathToRegexp('/users').test(pathname)) {
    LayoutComponent = BasicLayout;
  } else if (pathToRegexp('/form/step-form(.*)').test(pathname)) {
    LayoutComponent = ({ children, ...rest }) => {
      return (
        <BasicLayout {...rest}>
          <StepFormLayout {...rest}>{children}</StepFormLayout>
        </BasicLayout>
      );
    };
  } else {
    LayoutComponent = BasicLayout;
  }
  return (
    <LocaleProvider locale={zhCN}>
      <LayoutComponent location={location}>{children}</LayoutComponent>
    </LocaleProvider>
  );
});
