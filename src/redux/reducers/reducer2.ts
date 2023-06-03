import { actionType } from "../actions";

const initState = {}

export const reducer2 = (state = initState, action) => {

    switch (action.type) {
        case actionType.a2:
            return { ...state, ...action.payload }
        case actionType.a3:
            return { ...state, ...action.payload }
        case actionType.a4:
            return { ...state, ...action.payload }
        case actionType.a5:
            return { ...state, ...action.payload }
        default:
            return state
    }
}