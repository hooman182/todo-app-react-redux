import { Component } from "react";

class Form extends Component {
    render() {
        return (
            <form method="post">
                <div className="control">
                    <input className="input is-normal" type="text" placeholder="What needs to be done?" />
                </div>
            </form>
        )
    }
}

export default Form;