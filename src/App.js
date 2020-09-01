import React, {Component} from 'react';
import Menu from "./Components/Menu";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Menu/>
                <Content />
                <Footer/>
            </div>
        );
    }
}

export default App;