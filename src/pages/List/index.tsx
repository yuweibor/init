import * as React from 'react';
import { useParams } from "react-router-dom";
import { bindActionCreators, combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

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
        default:
            return state
    }
}


// const actions = bindActionCreators(action1, action2)
const reducers = combineReducers({ reducer1, reducer2 });
const store = createStore(reducers, applyMiddleware(thunk, logger));

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
// store.dispatch(act1({ name: 'a1' }));

const act = { act1, act2 }
const newAct = bindActionCreators(act, store.dispatch);
newAct.act1({ name: 'a11' })



const act3 = () => {
    return async (dispatch) => {
        await new Promise(e => setTimeout(e, 1000));
        dispatch({ type: 'a2', payload: { name: 'a2' } })
    }
}
store.dispatch(act3() as any);




export function Component() {
    // let data = useLoaderData();

    return (
        <>
            <h1>You made it!</h1>
            <p>list</p>
        </>
    );
}
