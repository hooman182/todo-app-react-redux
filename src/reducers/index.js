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
            const todos = state.todos.filter(todo => todo.id != action.payload)
            return {
                ...state,
                todos: [...todos]
            };
        case "EDIT_TODO":
            const todoIndex = state.todos.findIndex(item => item.id == action.payload.id);
            state.todos[todoIndex].text = action.payload.text;
            const updateTodos = state.todos;
            console.log(updateTodos);
            return {
                ...state,
                todos: [...updateTodos]
            }
        default:
            return state;
    }
}

export default reducer;