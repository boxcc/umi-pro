import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Table, Popconfirm } from 'antd';
// import styles from './Users.css';
const PAGE_SIZE = 5;

@connect(({ users, loading }) => ({
  users,
  loading: loading.models.users,
}))
export default class Users extends PureComponent {
  deleteHandler = id => {
    console.warn(`TODO: ${id}`);
  };

  render() {
    const {
      users: { list: dataSource, total, page: current },
      dispatch,
      loading,
    } = this.props;
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
      },
      {
        title: 'Email',
        dataIndex: 'email',
      },
      {
        title: 'Website',
        dataIndex: 'website',
      },
      {
        title: 'Operation',
        key: 'operation',
        render: (text, { id }) => (
          <span>
            <a href="">Edit</a>
            <Popconfirm
              title="Confirm to delete?"
              onConfirm={() => this.deleteHandler(id)}
            >
              <a href="">Delete</a>
            </Popconfirm>
          </span>
        ),
      },
    ];

    return (
      <div>
        <div>
          <Table
            loading={loading}
            columns={columns}
            dataSource={dataSource}
            rowKey="id"
            pagination={{
              total,
              current,
              pageSize: PAGE_SIZE,
              onChange: page =>
                dispatch({ type: 'users/fetch', payload: { page } }),
            }}
          />
        </div>
      </div>
    );
  }
}
