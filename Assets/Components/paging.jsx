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
        var pageNo=search.pageInformation.pageNo+1;

        request.get({
                url: 'http://localhost:4000/search?search=' + search.data+'&page='+pageNo,
                headers: Header,
                rejectUnauthorized: false
            },
            function (error, response, body) {
                let result=  JSON.parse(body);
                this.setState({

                    productItems:search.productItems.concat(result.productItems),
                    pageInformation:result.pageInformation

                });

                React.render(<Result1 productItems={this.state.productItems} pageInformation={this.state.pageInformation} data={search.data}/>,
                 document.getElementById('result'));
            }.bind(this));


    }
    render() {
        return (

            <button className="more btn btn-primary btn-block" onClick={this.loadMore.bind(this)}>
               Load More Products <span className="caret"></span>
            </button>
        )}

}

export default Paging;
