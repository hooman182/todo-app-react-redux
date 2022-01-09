import React, { Component } from "react";
import AddForm from "./AddForm.jsx";
import Todo from "./Todo";
import { connect } from "react-redux";

class TodoContainer extends Component {
    state = {
        statusTab: "all"
    }
    tabClick(status) {
        this.setState({ statusTab: status })
    }
    render() {
        return (
            <div className="row justify-content-between justify-content-md-center">
                <div className="col-sm-12 col-md-10 col-lg-4 mt-3">
                    <AddForm />
                </div>
                <div className="col-sm-12 col-md-10 col-lg-8 mt-3">

                    <ul class="nav nav-tabs d-flex justify-content-center">
                        <li class="nav-item">
                            <button class={`nav-link ${this.state.statusTab == "all" ? "active" : ""}`} onClick={this.tabClick.bind(this, "all")}>All</button>
                        </li>
                        <li class="nav-item">
                            <button class={`nav-link ${this.state.statusTab == "active" ? "active" : ""}`} onClick={this.tabClick.bind(this, "active")}>Active</button>
                        </li>
                        <li class="nav-item">
                            <button class={`nav-link ${this.state.statusTab == "completed" ? "active" : ""}`} onClick={this.tabClick.bind(this, "completed")}>Completed</button>
                        </li>
                    </ul>


                    <div className="card">
                        {
                            this.state.statusTab === "all" &&
                            <div className="card-body">
                                {!this.props.todos.length && <p className="text-center fs-3 fw-bold text-secondary">Nothing todo!</p>}
                                {this.props.todos.map(todo => <Todo data={todo} key={todo.id} />)}
                            </div>
                        }
                        {
                            this.state.statusTab === "active" &&
                            <div className="card-body">
                                {this.props.todos.map(todo => {
                                    if (todo.complete == false) {
                                        return <Todo data={todo} key={todo.id} />
                                    }
                                })}
                            </div>
                        }
                        {
                            this.state.statusTab === "completed" &&
                            <div className="card-body">
                                {
                                    this.props.todos.map(todo => {
                                        if (todo.complete) {
                                            return <Item data={todo} key={todo.id} />
                                        }
                                    })
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

function Item(props) {
    return (
        <div className="form-check">
            <input type="checkbox" className="form-check-input" checked="true" />
            <label className="form-check-label h5">
                {props.data.text}
            </label>
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(mapStateToProps)(TodoContainer);