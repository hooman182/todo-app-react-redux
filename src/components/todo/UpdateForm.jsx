import { Component } from "react"
import { connect } from "react-redux"
import { updateTodo } from "../../actions"

class UpdateForm extends Component {
    state = {
        input: this.props.value
    }
    formSubmitHandle = (e) => {
        e.preventDefault()
        this.props.updateTodo(this.state.input, this.props.id)
        this.props.isEdit()
    }
    inputChangeHandle = (e) => {
        this.setState({ input: e.target.value })
    }
    render() {
        return (
            <form method="post" onSubmit={this.formSubmitHandle}>
                <input type="text" className="form-control" value={this.state.input} onChange={this.inputChangeHandle} />
            </form>
        )
    }
}

export default connect(null, { updateTodo })(UpdateForm)