import React from 'react';
import request from 'request';
import Result1 from './plp';
import {searchData , getProducts} from './Action/searchAction';
import eventHandler from './Store/searchStore';
import {getCookie , setCookie} from './Helper/helper';
//import {login } from './Action/loginAction';
import Login from './Login';
var searchQuery;
class Result extends React.Component {

    constructor() {
        super();
        this.state = {showLogin: {display:'block'}};
        this._onChange = this._onChange.bind(this);
    }

    _onChange(e) {

      var Products= JSON.parse(event.currentTarget.response);

        React.render(<Result1 productItems={Products.productItems}
                              pageInformation={Products.pageInformation}
                              facetLists={Products.facetLists}
                              data={React.findDOMNode(this.refs.search).value.trim()}/>, document.getElementById('result'));
    }


    handleClick(e) {

        searchQuery= React.findDOMNode(this.refs.search).value.trim();
       searchData(searchQuery);
        //login('arunkumar.shivanna@in.tesco.com','arun@123');
    }

    render() {
        return (


            <div className="row">

                <button type="button" style={this.state.showLogin} className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Login</button>

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
         if(getCookie('userSesionToken')){
          this.setState({ showLogin: {display:'none'} });
        }
        eventHandler.addChangeListener(this._onChange);
    }


    componentWillUnmount() {
        eventHandler.removeChangeListener(this._onChange);
    }

}
export default Result;
