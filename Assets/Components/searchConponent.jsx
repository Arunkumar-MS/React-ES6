import React from 'react';
import request from 'request';
import Result1 from './plp';


class Result extends React.Component {








    handleClick(e) {
//console.log("search"+React.findDOMNode(this.refs.search).value);

        var Header = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        var search = React.findDOMNode(this.refs.search).value.trim();
        request.get({
                url: 'http://localhost:4000/search?search=' + search,
                headers: Header,
                rejectUnauthorized: false
            },
            function (error, response, body) {



                React.render(<Result1 list={JSON.parse(body)} data={search}/>, document.getElementById('result'));
            }.bind(this));


    }

    render() {
        return (


            <div ><h1 className="searchtxt"> Enter Search Item </h1>  <input ref="search" type="text"
                                                                             className="form-control"/>
                <input type="button" className="btn btn-primary custom" onClick={this.handleClick.bind(this)}
                       value="search"/>

            </div>



        );
    }
}
export default Result;
