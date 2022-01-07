const addTodo = text => ({
    type: "ADD_TODO",
    payload: text
})

const deleteTodo = key => ({
    type: "DELETE_TODO",
    payload: key
})

const editTodo = (text, id) => ({
    type: "EDIT_TODO",
    payload: { text, id }
})

const completeTodo = (value, id) => ({
    type: "COMPLETE_TODO",
    payload: { value, id }
})

export { addTodo, deleteTodo, editTodo, completeTodo }