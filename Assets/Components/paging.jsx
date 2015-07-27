import React from 'react';
import request from 'request';
import Result1 from './plp';


class Paging extends React.Component {

    loadMore(e) {
        var Header = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        var search = this.props.data;
        request.get({
                url: 'http://localhost:4000/search?search=' + search.data,
                headers: Header,
                rejectUnauthorized: false
            },
            function (error, response, body) {
                let result=  JSON.parse(body);
                this.setState({

                    items:search.list.productItems.concat(result.productItems),
                    pageInfo:result.pageInformation

                });

                React.render(<Result1 list={{'productItems': this.state.items,'pageInformation':this.state.pageInfo}}/>, document.getElementById('result'));
            }.bind(this));


    }
    render() {
        return (

            <button className="more btn btn-primary btn-block" onClick={this.loadMore.bind(this)}>
                More <span className="caret"></span>
            </button>
        )}

}

export default Paging;
