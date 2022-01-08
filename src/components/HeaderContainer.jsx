import { Component } from "react";

class Header extends Component {
    render() {
        return (
            <header className="bg-dark text-center">
                <h1 className="h2 text-secondary p-3">
                    Basic Redux Todo App
                </h1>
            </header>
        )
    }
}

export default Header;