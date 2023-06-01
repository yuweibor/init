import * as React from 'react';
import { useParams } from "react-router-dom";
import { bindActionCreators, combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

export async function loader({ request }) {
    return null;
}
const initState = { name: 'no name' }
const reducer1 = (state = initState, action) => {
    switch (action.type) {
        case 'a1':
            return { ...state, ...action.payload }
            break;
        default:
            return state
    }

}
const reducer2 = (state = initState, action) => {

    switch (action.type) {
        case 'a2':
            return { ...state, ...action.payload }
            break;
        case 'a3':
            return { ...state, ...action.payload }
            break;
        case 'a4':
            return { ...state, ...action.payload }
            break;
        default:
            return state
    }
}
const reducers = combineReducers({ reducer1, reducer2 });

const store = createStore(reducers, applyMiddleware(thunk, promise, logger));

const act1 = (payload) => {
    return {
        type: 'a1',
        payload
    }
}
const act2 = (payload) => {
    return {
        type: 'a2',
        payload
    }
}

// thunk 需要用到dispatch
const act3 = (payload) => {
    return async (dispatch) => {
        const res = await new Promise(e => setTimeout(() => e('thunk'), 1000));
        dispatch({ type: 'a3', payload: { name: payload.name + res } })
    }
}

// promise 只需返回promise
const act4 = (payload) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({ type: "a4", payload: { name: payload.name + 'promise' } })
        }, 1000)
    })
}

// 第一种
store.dispatch(act1({ name: 'a11' }));

// 第二种 整合action
const act = { act1, act2, act3, act4 }
const newAct = bindActionCreators(act, store.dispatch);
newAct.act2({ name: 'a22' })

// 第三种 redux-thunk
newAct.act3({ name: 'a33' })
// 第四种 redux-promise
newAct.act4({ name: 'a44' })

// 第四种 redux-promise

export function Component() {
    // let data = useLoaderData();

    return (
        <>
            <h1>You made it!</h1>
            <p>list</p>
        </>
    );
}
