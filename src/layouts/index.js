import React from 'react';
import pathToRegexp from 'path-to-regexp';
import { IntlProvider } from 'react-intl';
import withRouter from 'umi/withRouter';
import dynamic from 'umi/dynamic';
import { connect } from 'dva';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

// Import i18n messages
import { translationMessages } from 'src/i18n';

import BasicLayout from 'layouts/BasicLayout';
import UserLayout from 'layouts/UserLayout';

function mapStateToProps({ global }) {
  return {
    locale: global.locale,
  };
}

const app = (messages) => withRouter(
  connect(mapStateToProps)(({ children, location, locale }) => {
    const { pathname } = location;
    let LayoutComponent = BasicLayout;
    if (pathToRegexp('/user(.*)').test(pathname)) {
      LayoutComponent = UserLayout;
    } else {
      LayoutComponent = BasicLayout;
    }

    return (
      <IntlProvider
        locale={locale}
        key={locale}
        messages={messages[locale]}
      >
        <LocaleProvider locale={locale === 'zh' ? zhCN : {}}>
          <LayoutComponent location={location}>{children}</LayoutComponent>
        </LocaleProvider>
      </IntlProvider>
    );
  })
);

export default dynamic(async () => {
  if (!window.Intl) {
    await import('intl');
    await Promise.all([
      import('intl/locale-data/jsonp/en.js'),
      import('intl/locale-data/jsonp/zh.js'),
    ]);
  }

  return app(translationMessages);
});
