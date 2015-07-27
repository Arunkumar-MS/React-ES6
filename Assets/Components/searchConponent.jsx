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



            <div className="row">

                <div>
                    <div className="input-group">
                        <input ref="search" type="text" className="form-control" placeholder="Search for items like - Milk"/>

                        <span className="input-group-btn">
                    <button className="btn btn-primary" type="button" onClick={this.handleClick.bind(this)}>Search</button>
                  </span>
                    </div>
                </div>
            </div>




        );
    }
}
export default Result;
