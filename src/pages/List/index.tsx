import * as React from 'react';
import { useParams } from "react-router-dom";
import { bindActionCreators, combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createSagaMiddleware from "redux-saga";
import { take, all, takeEvery, takeLatest, call, put, delay, apply, select, cps, fork, cancel, cancelled, race } from 'redux-saga/effects';

export async function loader({ request }) {
    return null;
}
const actionType = {
    'a1': Symbol('a1'),
    'a2': Symbol('a2'),
    'a3': Symbol('a3'),
    'a4': Symbol('a4'),
    'a5': Symbol('a5'),
}
const initState = { name: 'no name' }
const reducer1 = (state = initState, action) => {
    switch (action.type) {
        case actionType.a1:
            return { ...state, ...action.payload }
            break;
        default:
            return state
    }

}
const reducer2 = (state = initState, action) => {

    switch (action.type) {
        case actionType.a2:
            return { ...state, ...action.payload }
            break;
        case actionType.a3:
            return { ...state, ...action.payload }
            break;
        case actionType.a4:
            return { ...state, ...action.payload }
            break;
        default:
            return state
    }
}
const reducers = combineReducers({ reducer1, reducer2 });

const sagaMid = createSagaMiddleware();

// const store = createStore(reducers, applyMiddleware( thunk, promise, logger));
const store = createStore(reducers, applyMiddleware(sagaMid, logger));

const act1 = (payload) => {
    return {
        type: actionType.a1,
        payload
    }
}
const act2 = (payload) => {
    return {
        type: actionType.a2,
        payload
    }
}

// thunk 需要用到dispatch
const act3 = (payload) => {
    return async (dispatch) => {
        const res = await new Promise(e => setTimeout(() => e('thunk'), 1000));
        dispatch({ type: actionType.a3, payload: { name: payload.name + res } })
    }
}

// promise 只需返回promise
const act4 = (payload) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({ type: actionType.a4, payload: { name: payload.name + 'promise' } })
        }, 1000)
    })
}


// 派发 dispatch
// 第一种
// store.dispatch(act1({ name: 'a11' }));

// 第二种 整合action
const act = { act1, act2, act3, act4 }
const newAct = bindActionCreators(act, store.dispatch);
// newAct.act2({ name: 'a22' })

// 第三种 redux-thunk
// newAct.act3({ name: 'a33' })
// 第四种 redux-promise
// newAct.act4({ name: 'a44' })

// 第五种 redux-saga 最复杂

// take 阻塞的
function* sagaTask() {
    // while (1) {
    console.log('take a1 begin');
    const takenAction = yield take(actionType.a1);
    //副作用
    console.log('finish a1', takenAction);
    // }
}
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


export function Component() {
    // let data = useLoaderData();

    return (
        <>
            <button onClick={() => { }}>click</button>
            <button onClick={() => { store.dispatch(act1({ name: 'a1' })) }}>click2</button>
            <img src='../../img/zuse.jpg' style={{ width: "80%" }} />
        </>
    );
}

