import * as React from 'react';
import * as ReactDom from 'react-dom';
import '../assets/styles/main.scss';
import Header from "./components/header";
import Search from "./components/search";

declare const window: any;
class App extends React.Component<{}, any> {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    public render() {
        return (
            <div>
                <Header />
                <Search />
            </div>
        );
    }


}

ReactDom.render(<App />, document.getElementById('content'));