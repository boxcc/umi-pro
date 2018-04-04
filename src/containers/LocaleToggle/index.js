import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { appLocales } from 'src/i18n';
import { Select } from 'antd';

const { Option } = Select;

@connect(({ global }) => ({
  locale: global.locale,
}))
export default class LocaleToggle extends PureComponent {
  handleLocaleToggle = v => {
    this.props.dispatch({
      type: 'global/localeToggle',
      payload: v,
    });
  };

  render() {
    const { locale } = this.props;
    return (
      <Select value={locale} onChange={this.handleLocaleToggle}>
        {appLocales.map(row => <Option key={row}>{row}</Option>)}
      </Select>
    );
  }
}
