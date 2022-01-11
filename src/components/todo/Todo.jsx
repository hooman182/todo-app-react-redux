import { Component } from "react";
import { connect } from "react-redux";
import { deleteTodo, todoToggled } from "../../actions";
import UpdateForm from "./UpdateForm";

class Todo extends Component {
    state = {
        edit: false,
        input: this.props.data.text,
        checked: false
    }
    deleteTodoClick(index) {
        this.props.deleteTodo(index);
    }
    editTodoClick = (index) => {
        this.setState({ edit: !this.state.edit, id: index })
    }
    checkboxChangeHandle = () => {
        this.setState({ checked: !this.state.checked })
        this.props.todoToggled(this.state.checked, this.props.data.id)
    }
    changeEditHandle() {
        this.setState({ edit: false })
    }
    render() {
        const todo = this.props.data;
        const lineThrough = todo.complete ? 'text-decoration-line-through' : ''
        return (
            <div className="d-flex justify-content-between align-items-center my-3">
                <div className="flex-grow-1 me-4">
                    {
                        !this.state.edit ?
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id={todo.id} onChange={this.checkboxChangeHandle} checked={todo.complete} />
                                <label className={`${lineThrough} form-check-label h5`} htmlFor={todo.id}>
                                    {todo.text}
                                </label>
                            </div>
                            :
                            <UpdateForm value={todo.text} id={todo.id} isEdit={this.changeEditHandle.bind(this)} />
                    }
                </div>
                <div className="btn-group">
                    <button className={`btn btn-${!this.state.edit ? 'secondary' : 'warning'}`} onClick={this.editTodoClick.bind(this, todo.id)}>
                        {
                            !this.state.edit ?
                                <i className="bi bi-pen-fill"></i>
                                :
                                <i className="bi bi-x-lg"></i>
                        }
                    </button>
                    <button className="btn btn-primary" onClick={this.deleteTodoClick.bind(this, todo.id)}>
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </div>
            </div>
        )
    }
}

export default connect(null, { deleteTodo, todoToggled })(Todo);