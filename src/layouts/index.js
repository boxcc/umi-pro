import React from 'react';
import pathToRegexp from 'path-to-regexp';
import BasicLayout from 'layouts/BasicLayout';
// import BlankLayout from 'layouts/BlankLayout';
// import PageHeaderLayout from 'layouts/PageHeaderLayout';
import UserLayout from 'layouts/UserLayout';
import withRouter from 'umi/withRouter';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

export default withRouter(({ children, location, ...restProps }) => {
  const { pathname } = window.location;
  let LayoutComponent = BasicLayout;
  if (pathToRegexp('/user(.*)').test(pathname)) {
    LayoutComponent = UserLayout;
  } else {
    LayoutComponent = BasicLayout;
  }
  return (
    <LocaleProvider locale={zhCN}>
      <LayoutComponent location={location}>{children}</LayoutComponent>
    </LocaleProvider>
  );
});
