import { queryNotices } from '../services/api';
import { routerRedux } from 'dva/router';

export default {
  namespace: 'global',

  state: {
    collapsed: false,
    notices: [],
    login: false,
  },

  effects: {
    *login(action, { call, put }) {
      yield put({
        type: 'signin',
      });
      yield put(routerRedux.push('/'));
    },
    *fetchNotices(_, { call, put }) {
      const data = yield call(queryNotices);
      yield put({
        type: 'saveNotices',
        payload: data,
      });
      yield put({
        type: 'user/changeNotifyCount',
        payload: data.length,
      });
    },
    *clearNotices({ payload }, { put, select }) {
      yield put({
        type: 'saveClearedNotices',
        payload,
      });
      const count = yield select(state => state.global.notices.length);
      yield put({
        type: 'user/changeNotifyCount',
        payload: count,
      });
    },
  },

  reducers: {
    signin(state) {
      return {
        ...state,
        login: true,
      };
    },
    changeLayoutCollapsed(state, { payload }) {
      return {
        ...state,
        collapsed: payload,
      };
    },
    saveNotices(state, { payload }) {
      return {
        ...state,
        notices: payload,
      };
    },
    saveClearedNotices(state, { payload }) {
      return {
        ...state,
        notices: state.notices.filter(item => item.type !== payload),
      };
    },
  },

  // subscriptions: {
  //   setup({ history }) {
  //     // Subscribe history(url) change, trigger `load` action if pathname is `/`
  //     return history.listen(({ pathname, search }) => {
  //       if (typeof window.ga !== 'undefined') {
  //         window.ga('send', 'pageview', pathname + search);
  //       }
  //     });
  //   },
  // },
};
