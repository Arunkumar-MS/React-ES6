import React from 'react';
import request from 'request';
import Result1 from './plp';
import {searchData , getProducts} from './Action/searchAction';
import event from './Store/searchStore';

class Paging extends React.Component {


    constructor() {
        super();


        this._onPageChange = this._onPageChange.bind(this);
    }

    _onPageChange() {

        var search = this.props.data;
        var pageNo = search.pageInformation.pageNo + 1;

        var result = JSON.parse(getProducts());

        this.setState({

            productItems: search.productItems.concat(result.productItems),
            pageInformation: result.pageInformation

        });

        React.render(<Result1 productItems={this.state.productItems} pageInformation={this.state.pageInformation}
                              data={search.data}/>,
            document.getElementById('result'));


    }


    loadMore(e) {
        var search = this.props.data;
        var pageNo = search.pageInformation.pageNo + 1;

        searchData(search.data, pageNo);

    }

    render() {
        return (

            <button className="more btn btn-primary btn-block" onClick={this.loadMore.bind(this)}>
                Load More Products <span className="caret"></span>
            </button>
        )
    }

    componentWillMount() {


        event.addChangeListener(this._onPageChange, 'PageChange');
    }


    componentWillUnmount() {
        event.removeChangeListener(this._onPageChange, 'PageChange');
    }

}

export default Paging;
