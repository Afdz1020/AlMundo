import * as React from 'react';
import * as ReactDom from 'react-dom';
import '../../assets/styles/components/header.scss';

export interface IHeader{

}
export default class Header extends React.Component<IHeader, any> {
    constructor(props){
        super(props);
    }

    public render(){
        return (
            <header className="ppal">
                <img src="../assets/images/logo-almundo.svg" />
            </header>
        )
    }
}