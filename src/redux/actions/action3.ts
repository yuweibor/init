import { actionType } from ".";
// thunk 需要用到dispatch
export const act3 = (payload) => {
    return async (dispatch) => {
        const res = await new Promise(e => setTimeout(() => e('thunk'), 1000));
        dispatch({ type: actionType.a3, payload: { name: payload.name + res } })
    }
}