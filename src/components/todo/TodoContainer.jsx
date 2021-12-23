import { Component } from "react";
import Form from "./Form.jsx";
import Todo from "./Todo";
import StatusTabs from "./StatusTabs";
import { connect } from "react-redux";

class TodoContainer extends Component {
    render() {
        return (
            <div className="row justify-content-between justify-content-md-center">
                <div className="col-sm-12 col-md-10 col-lg-4 mt-3">
                    <Form />
                </div>
                <div className="col-sm-12 col-md-10 col-lg-8 mt-3">
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