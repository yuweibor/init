import { actionType } from "../actions";

const initState = { name: 'no name' }

export const reducer1 = (state = initState, action) => {
    switch (action.type) {
        case actionType.a1:
            return { ...state, ...action.payload }
        default:
            return state
    }

}