const addTodo = text => ({
    type: "ADD_TODO",
    payload: text
})

const deleteTodo = key => ({
    type: "DELETE_TODO",
    payload: key
})

const updateTodo = (text, id) => ({
    type: "UPDATE_TODO",
    payload: { text, id }
})

const todoToggled = (value, id) => ({
    type: "TODO_TOGGLED",
    payload: { value, id }
})

export { addTodo, deleteTodo, updateTodo, todoToggled }