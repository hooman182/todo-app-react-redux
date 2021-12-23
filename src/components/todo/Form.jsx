import { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../actions";

class Form extends Component {
    state = {
        input: ""
    }
    formSubmitHandle = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.input);
        this.setState({ input: "" })
    }
    inputChangeHandle = (e) => {
        this.setState({ input: e.target.value })
    }
    render() {
        return (
            <form method="post" onSubmit={this.formSubmitHandle}>
                <div className="control">
                    <input
                        className="input is-normal"
                        type="text"
                        placeholder="What needs to be done?"
                        value={this.state.input}
                        onChange={this.inputChangeHandle}
                    />
                </div>
            </form>
        )
    }
}

export default connect(null, { addTodo })(Form);