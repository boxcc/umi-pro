import React from 'react';
import { connect } from 'dva';
import Redirect from 'umi/redirect';
import styles from './index.css';

function IndexPage({ login }) {
  if (login) {
    return <Redirect to="/login" />;
  }
  
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva">Getting Started</a></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

const mapStateToProps = (state) => {
  return {
    login: state.global.login,
  };
}

export default connect(mapStateToProps)(IndexPage);
