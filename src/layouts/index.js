import React from 'react';
import pathToRegexp from 'path-to-regexp';
import BasicLayout from 'layouts/BasicLayout';
import BlankLayout from 'layouts/BlankLayout';
import PageHeaderLayout from 'layouts/PageHeaderLayout';
import UserLayout from 'layouts/UserLayout';

export default ({ children }) => {
  const { pathname } = window.location;
  let LayoutComponent;
  if (pathToRegexp('/users').test(pathname)) {
    LayoutComponent = BasicLayout;
  } else {
    LayoutComponent = BasicLayout;
  }
  return <LayoutComponent>{children}</LayoutComponent>;
  // return (
  //   <LocaleProvider locale={zhCN}>
  //     <Redirect to="/login" />
  //   </LocaleProvider>
  // );
};
