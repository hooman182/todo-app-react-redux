import { Component } from "react";

class Todo extends Component {
    render() {
        return (
            <div className="columns">
                <div className="column is-10">
                    <label className="checkbox">
                        <input type="checkbox" className="mr-2" />
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </label>
                </div>
                <div className="column">
                    <div class="buttons has-addons are-small">
                        <button class="button is-danger">
                            <i class="fas fa-trash"></i>
                        </button>
                        <button class="button is-info">
                            <i class="fas fa-pen"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Todo;