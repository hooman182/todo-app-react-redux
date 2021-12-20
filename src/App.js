import { Component } from "react";
import Header from "./components/HeaderContainer";
import MainContainer from "./components/MainContainer";

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <MainContainer />
            </>
        )
    }
}

export default App;