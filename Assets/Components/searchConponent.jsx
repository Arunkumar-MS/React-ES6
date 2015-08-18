import React from 'react';
import request from 'request';
import Result1 from './plp';
import {searchData , getProducts} from './Action/searchAction';
import event from './Store/searchStore';
var searchQuery;
class Result extends React.Component {

    constructor() {
        super();
        this.state = {test: 'hello'};

        this._onChange = this._onChange.bind(this);
    }

    _onChange() {

        this.setState({test: 'changed'});
        React.render(<Result1 productItems={JSON.parse(getProducts()).productItems}
                              pageInformation={JSON.parse(getProducts()).pageInformation}
                              facetLists={JSON.parse(getProducts()).facetLists}
                              data={React.findDOMNode(this.refs.search).value.trim()}/>, document.getElementById('result'));
    }

    handleClick(e) {

        searchQuery= React.findDOMNode(this.refs.search).value.trim();
        searchData(searchQuery);

    }

    render() {
        return (


            <div className="row">

                <div>
                    <div className="input-group">
                        <input ref="search" type="text" className="form-control"
                               placeholder="Search for items like - Milk"/>

                        <span className="input-group-btn">
                    <button className="btn btn-primary" type="button" onClick={this.handleClick.bind(this)}>Search
                    </button>
                  </span>
                    </div>
                </div>
            </div>



        );
    }


    componentWillMount() {


        event.addChangeListener(this._onChange);
    }


    componentWillUnmount() {
        event.removeChangeListener(this._onChange);
    }

}
export default Result;
