import { Component } from "react";
import Form from "./Form.jsx";
import Todo from "./Todo";
import StatusTabs from "./StatusTabs";
import { connect } from "react-redux";

class TodoContainer extends Component {
    render() {
        return (
            <>
                <div className="card">
                    <div className="card-content">
                        <Form />
                    </div>
                </div>
                <div className="card mt-4">
                    <div className="card-content">
                        <StatusTabs />
                        <div>
                            {this.props.todos.map(todo => <Todo data={todo} key={todo.id} />)}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(mapStateToProps)(TodoContainer);