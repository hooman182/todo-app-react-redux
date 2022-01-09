const initialState = {
    todos: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [
                    {
                        id: Math.random(),
                        text: action.payload,
                        complete: false
                    },
                    ...state.todos
                ]
            };
        case "DELETE_TODO":
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };

        case "UPDATE_TODO":
            return {
                ...state,
                todos: state.todos.map(
                    todo =>
                        todo.id != action.payload.id ? todo : { ...todo, text: action.payload.text }
                )
            }

        case "TODO_TOGGLED":
            return {
                ...state,
                todos: state.todos.map(
                    todo =>
                        todo.id !== action.payload.id ? todo : { ...todo, complete: !todo.complete }
                )
            }
            
        default:
            return state;
    }
}


export default todoReducer;