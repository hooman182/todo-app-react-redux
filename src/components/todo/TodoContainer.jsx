import { Component } from "react";
import Form from "./Form.jsx";
import Todo from "./Todo";
import StatusTabs from "./StatusTabs";

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
                            <Todo />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default TodoContainer;