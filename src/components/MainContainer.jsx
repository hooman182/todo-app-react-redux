import { Component } from "react";
import TodoContainer from "./todo/TodoContainer.jsx";

class MainContainer extends Component {
    render() {
        return (
            <main className="container">
                <div className="columns">
                    <div className="column is-8 is-offset-2">
                        <TodoContainer />
                    </div>
                </div>
            </main>
        )
    }
}

export default MainContainer;