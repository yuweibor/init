export default {
    state: {
        age: 1
    },
    reducers: {
        save: (state, { payload }) => {
            return { ...state, ...payload }
        }
    }
}