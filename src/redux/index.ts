// import { useParams } from "react-router-dom";
import { bindActionCreators, createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
// import promise from 'redux-promise';
import createSagaMiddleware from "redux-saga";
import reducers from './reducers';
import actions, { actionType } from './actions';
import sagaRoot from './saga';

export const sagaMid = createSagaMiddleware();
sagaMid.run(sagaRoot);

// 用thunk 或者 promise
// const store = createStore(reducers, applyMiddleware( thunk, promise, logger));

const store = createStore(reducers, applyMiddleware(sagaMid, logger));

// 第一种
// store.dispatch(act1({ name: 'a11' }));

// 第二种 整合action
export const newActions = bindActionCreators(actions, store.dispatch);
// newAct.act2({ name: 'a22' })

// 第三种 redux-thunk
// newAct.act3({ name: 'a33' })
// 第四种 redux-promise
// newAct.act4({ name: 'a44' })

// 第五种 redux-saga 最复杂


export default store;