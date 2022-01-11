import { Component } from "react"
import { connect } from "react-redux"
import { addTodo } from "../../actions"
import Message from "./Message"

class AddForm extends Component {
    state = {
        input: "",
        inValid: null
    }
    formSubmitHandle = (e) => {
        e.preventDefault();
        if (this.state.input) {
            this.props.addTodo(this.state.input);
            this.setState({ input: "" })
        } else {
            this.setState({ inValid: true })
        }
    }
    inputChangeHandle = (e) => {
        this.setState({ input: e.target.value })
    }
    inputKeyHandle = (e) => {
        if (e.target.value.length == 1) {
            this.setState({ inValid: null })
        }
    }
    render() {
        const state = this.state
        const inValid = state.inValid ? 'is-invalid' : ''
        return (
            <>
                <form method="post" onSubmit={this.formSubmitHandle}>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className={`form-control ${inValid}`}
                            placeholder="What needs to be done?"
                            value={this.state.input}
                            onChange={this.inputChangeHandle}
                            onKeyUp={this.inputKeyHandle}
                        />
                        <label htmlFor="floatingInput">What needs to be done?</label>
                    </div>
                </form>
                {
                    state.inValid && <Message text="Please fill in the field" background="danger" />
                }
            </>
        )
    }
}

export default connect(null, { addTodo })(AddForm);