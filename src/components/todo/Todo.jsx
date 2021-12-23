import { Component } from "react";
import { connect } from "react-redux";
import { deleteTodo, editTodo } from "../../actions";

class Todo extends Component {
    state = {
        edit: false,
        input: "",
        id: null
    }
    deleteTodoClick = (index) => {
        this.props.deleteTodo(index);
    }
    editTodoClick = (index) => {
        this.setState({ edit: !this.state.edit, id: index })
    }
    formSubmitHandle = (e) => {
        e.preventDefault();
        this.props.editTodo(this.state.input, this.props.data.id);
        this.setState({ edit: false })
    }
    inputChangeHandle = (e) => {
        this.setState({ input: e.target.value });
    }
    render() {
        const todo = this.props.data;
        return (
            <div className="d-flex justify-content-between align-items-center my-3">
                <div className="flex-grow-1">
                    {
                        !this.state.edit ?
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id={todo.id} />
                                <label className="form-check-label h5" for={todo.id}>
                                    {todo.text}
                                </label>
                            </div>
                            :
                            <form method="post" onSubmit={this.formSubmitHandle}>
                                <input className="form-control" type="text" value={this.state.input} onChange={this.inputChangeHandle} />
                            </form>
                    }
                </div>
                <div className="btn-group">
                    <button className={`btn btn-${!this.state.edit ? 'primary' : 'warning'}`} onClick={this.editTodoClick.bind(this, todo.id)}>
                        {
                            !this.state.edit ?
                                <i className="fas fa-pen"></i>
                                :
                                <i class="fas fa-times"></i>
                        }
                    </button>
                    <button className="btn btn-primary" onClick={this.deleteTodoClick.bind(this, todo.id)}>
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        )
    }
}

export default connect(null, { deleteTodo, editTodo })(Todo);