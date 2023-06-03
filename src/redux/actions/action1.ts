import { actionType } from '.';
export const common = (payload) => {
    return {
        type: actionType.a1,
        payload
    }
}

export const act2 = (payload) => {
    return {
        type: actionType.a2,
        payload
    }
}

export const act5 = (payload) => {
    return {
        type: actionType.a5,
        payload
    }
}