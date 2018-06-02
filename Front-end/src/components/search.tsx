import * as React from 'react';
import * as ReactDom from 'react-dom';
import '../../assets/styles/components/search.scss';

export interface ISearch {

}
export default class Search extends React.Component<ISearch, any> {
    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <div className="search-content">
                <span>Filtros</span>
                <hr />                
                <img src="../../assets/icons/filters/search.svg" />
                <h5>Nombre del hotel</h5> 
                <input />
            </div>
        )
    }
}