// import { useParams } from "react-router-dom";
import { bindActionCreators, createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
// import promise from 'redux-promise';
import createSagaMiddleware from "redux-saga";
import { take, all, takeEvery, takeLatest, call, put, delay, apply, select, cps, fork, cancel, cancelled, race } from 'redux-saga/effects';
import reducers from './reducers';
import actions, { actionType } from './actions';


export const sagaMid = createSagaMiddleware();

// 用thunk 或者 promise
// const store = createStore(reducers, applyMiddleware( thunk, promise, logger));

const store = createStore(reducers, applyMiddleware(sagaMid, logger));

// 第一种
// store.dispatch(act1({ name: 'a11' }));

// 第二种 整合action
export const bindActions = bindActionCreators(actions, store.dispatch);
// newAct.act2({ name: 'a22' })

// 第三种 redux-thunk
// newAct.act3({ name: 'a33' })
// 第四种 redux-promise
// newAct.act4({ name: 'a44' })

// 第五种 redux-saga 最复杂

// take 阻塞的
// function* sagaTask() {
//     // while (1) {
//     console.log('take a1 begin');
//     const takenAction = yield take(actionType.a1);
//     //副作用
//     console.log('finish a1', takenAction);
//     // }
// }
// function* sagaTask2() {
//     // while (1) {
//     console.log('take a2 begin');
//     const takenAction = yield take(actionType.a2);
//     //副作用
//     console.log('finish a2', takenAction);
//     // }
// }

// all 阻塞的
// function* sagaAllTask() {
//     console.log('begin all');
//     const allAction = yield all([call(sagaTask), call(sagaTask2)]);
//     console.log('finish all', allAction);
// }
// takeLatest 跟 takeEvery 一样会取消掉之前的任务
// function* sagaTakeEvery() {
//     console.log('every begin');
//     yield takeLatest(actionType.a1, sagaTask);
//     console.log('never')
// }

// function* collectEvery() {
//     yield takeEvery(actionType.a1, sagaTask);
//     yield takeEvery(actionType.a2, sagaTask2);
// }

// function* effectTask(arg1, arg2) {
//     console.log('effect begin');
//     //副作用
//     const res = yield new Promise(e => setTimeout(() => e('effects'), 1000));
//     yield put(act1({ name: `${res} ${arg1} ${arg2}` }))
//     console.log('efect finish');
// }

// call 是阻塞的
// function* callAndPut() {
//     console.log('put begin');
//     yield put(act1({ name: "putting" }))
//     yield call(effectTask, '111', '222')
//     //等效
//     yield apply(null, effectTask, ['111', '222'])
//     console.log('put finish')
// }

// select 非阻塞
// function* testSelect() {
//     const stat = yield select(stat => stat.reducer1.name);
//     console.log('select', stat)
// }

// function* testFork() {
//     console.log('first')
//     yield delay(1000);
//     console.log('first finish')
//     //fork 之后 直接last 不用等到finish 在往后 //如果改成call则需要等待
//     yield fork(function* () {
//         console.log('fork')
//         yield delay(1000)
//         console.log('fork finish')
//     })
//     console.log('last')
//     yield delay(1000)
//     console.log('last finish')
// }
// function* testCancel() {
//     yield fork
// }


// sagaMid.run(sagaTask);
// sagaMid.run(sagaAllTask);
// sagaMid.run(sagaTakeEvery)
// sagaMid.run(collectEvery)
// sagaMid.run(callAndPut);
// sagaMid.run(testSelect);
// sagaMid.run(testFork);
export default store;