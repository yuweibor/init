export default {
    state: {
        age: 3
    },
    effects: {
        *asyncAdd(action, { call, put }) {
            console.log(898, action);
            yield call(delay(1000));

            yield put({ type: 'a/save', payload: { age: Math.random() } })

        }
    },
    reducers: {
        add: (state) => {
            return { age: state.age + 1 }
        }
    }
}

function delay(t) {
    return () => new Promise(r => setTimeout(r, t))
}