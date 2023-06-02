import { take, all, takeEvery, takeLatest, call, put, delay, apply, select, cps, fork, cancel, cancelled, race } from 'redux-saga/effects';
import { actionType } from '../actions';
import { act5 } from '../actions/action5';
export default function* () {

}


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