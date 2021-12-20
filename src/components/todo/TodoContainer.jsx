import { Component } from "react";

class TodoContainer extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <form method="post">
                        <div className="control">
                            <input className="input is-normal" type="text" placeholder="What needs to be done?" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoContainer;