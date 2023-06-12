export default {
    state: {
        age: 1
    },
    reducers: {
        save: (state, { payload }) => {
            // state.age++
            return { ...state, ...payload }
        }
    }
}