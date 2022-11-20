// 仓库入口文件
// 引入reducer
// import reducer from "./reducer";
// // 创建仓库
// import {legacy_createStore as createStore} from 'redux';
//
// const store = createStore(reducer);
//
// export default store;


// 使用redux toolkit
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './reducer';

export default configureStore({
  reducer: {
    count: counterReducer,
  }
})
