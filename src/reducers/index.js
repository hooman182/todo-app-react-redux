const initialState = {
    todos: []
}

const reducer = (state = initialState, action) => {
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
            const todos = state.todos.filter(todo => todo.id !== action.payload)
            return {
                ...state,
                todos: [...todos]
            };
        case "EDIT_TODO":
            const todo = state.todos.find(todo => todo.id === action.payload.id)
            todo.text = action.payload.text
        case "COMPLETE_TODO":
            const findTodo = state.todos.find(todo => todo.id === action.payload.id)
            findTodo.complete = !findTodo.complete
        default:
            return state;
    }
}

export default reducer;