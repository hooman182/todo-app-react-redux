import { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../actions";

class AddForm extends Component {
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
                <input
                    className="form-control"
                    type="text"
                    placeholder="What needs to be done?"
                    value={this.state.input}
                    onChange={this.inputChangeHandle}
                    autoFocus
                />
            </form>
        )
    }
}

export default connect(null, { addTodo })(AddForm);