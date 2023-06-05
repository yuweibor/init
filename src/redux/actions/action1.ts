import { actionType } from '.';
import { createActions, handleActions, combineActions, createAction } from 'redux-actions';
export const save = (payload) => {
    return {
        type: actionType.a1,
        payload
    }
}
// export const act2 = createAction(actionType.a2, payload => payload);
export const act2 = (payload) => {
    return {
        type: actionType.a2,
        payload
    }
}
// export const act5 = createAction(actionType.a5);
export const act5 = (payload) => {
    return {
        type: actionType.a5,
        payload
    }
}
// export const acts = createActions({ act2, act5 });