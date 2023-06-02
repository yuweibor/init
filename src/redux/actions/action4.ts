import { actionType } from "."
// promise 只需返回promise
export const act4 = (payload) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({ type: actionType.a4, payload: { name: payload.name + 'promise' } })
        }, 1000)
    })
}