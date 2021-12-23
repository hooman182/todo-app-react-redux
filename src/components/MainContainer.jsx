import { Component } from "react";
import TodoContainer from "./todo/TodoContainer.jsx";

class MainContainer extends Component {
    render() {
        return (
            <main className="container-fluid pt-2">
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-lg-12">
                        <TodoContainer />
                    </div>
                </div>
            </main>
        )
    }
}

export default MainContainer;