import React, { Fragment } from 'react';
import Link from 'umi/link';
import DocumentTitle from 'react-document-title';
import { Icon } from 'antd';
import logo from 'assets/logo.svg';
import { getBreadcrumbNameMap } from 'common/menu';
import GlobalFooter from 'components/GlobalFooter';

import styles from './UserLayout.less';

const links = [{
  key: 'help',
  title: '帮助',
  href: '',
}, {
  key: 'privacy',
  title: '隐私',
  href: '',
}, {
  key: 'terms',
  title: '条款',
  href: '',
}];

const copyright = <Fragment>Copyright <Icon type="copyright" /> 2018 蚂蚁金服体验技术部出品</Fragment>;

class UserLayout extends React.PureComponent {
  getPageTitle() {
    const { location } = this.props;
    const { pathname } = location;
    const breadcrumbNameMap = getBreadcrumbNameMap();
    let title = 'Ant Design Pro';
    if (breadcrumbNameMap[pathname] && breadcrumbNameMap[pathname].name) {
      title = `${breadcrumbNameMap[pathname].name} - Ant Design Pro`;
    }
    return title;
  }
  
  render() {
    const { children } = this.props;
    return (
      <DocumentTitle title={this.getPageTitle()}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.top}>
              <div className={styles.header}>
                <Link to="/">
                  <img alt="logo" className={styles.logo} src={logo} />
                  <span className={styles.title}>Ant Design</span>
                </Link>
              </div>
              <div className={styles.desc}>Ant Design 是西湖区最具影响力的 Web 设计规范</div>
            </div>
            {children}
          </div>
          
          <GlobalFooter links={links} copyright={copyright} />
        </div>
      </DocumentTitle>
    );
  }
}

export default UserLayout;
