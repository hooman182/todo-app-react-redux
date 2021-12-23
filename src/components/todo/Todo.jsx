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
            <div className="columns">
                <div className="column is-10">
                    {
                        !this.state.edit ?
                            <label className="checkbox">
                                <input type="checkbox" className="mr-2" />
                                {todo.text}
                            </label>
                            :
                            <form method="post" onSubmit={this.formSubmitHandle}>
                                <input className="input is-small is-warning" type="text" value={this.state.input} onChange={this.inputChangeHandle} />
                            </form>
                    }
                </div>
                <div className="column">
                    <div className="buttons has-addons are-small">
                        <button className="button is-danger" onClick={this.deleteTodoClick.bind(this, todo.id)}>
                            <i className="fas fa-trash"></i>
                        </button>
                        <button className={`button ${!this.state.edit ? 'is-info' : 'is-warning' }`} onClick={this.editTodoClick.bind(this, todo.id)}>
                            {
                                !this.state.edit ?
                                    <i className="fas fa-pen"></i>
                                    :
                                    <i class="fas fa-times"></i>
                            }
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { deleteTodo, editTodo })(Todo);