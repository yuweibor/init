export const detailReducer = (state, action) => {
    switch (action.type) {
        case 'add_num': {
            return {
                name: state.name,
                age: state.age + action.step
            };
        }
        case 'change_name': {
            return {
                name: action.nextName,
                age: state.age
            };
        }
    }
    throw Error('Unknown action: ' + action.type);
}

export const initState = { name: 'n', age: 1 };
