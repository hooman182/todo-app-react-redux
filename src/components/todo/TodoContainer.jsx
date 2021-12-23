import { Component } from "react";
import Form from "./Form.jsx";
import Todo from "./Todo";
import StatusTabs from "./StatusTabs";
import { connect } from "react-redux";

class TodoContainer extends Component {
    render() {
        return (
            <div className="row justify-content-between">
                <div className="col-4">
                    <Form />
                </div>
                <div className="col-8">
                    <div className="card">
                        <div className="card-body">
                            <StatusTabs />
                            <div className="px-3">
                                {this.props.todos.map(todo => <Todo data={todo} key={todo.id} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(mapStateToProps)(TodoContainer);