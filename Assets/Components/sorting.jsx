import React from 'react'
import request from 'request';
import Result1 from './plp';
import {sortProducts , getSortedProducts} from './Action/sortAction';
import eventHandler from './Store/sortStore';

class Sorting  extends React.Component
{

    constructor(props) {
        super(props);
        this.state = { sortAlphabetical: true , sortNumber : true }

        this._onSortChange = this._onSortChange.bind(this);
    }

    _onSortChange() {
       var product = JSON.parse(event.currentTarget.response);
        React.render(<Result1 productItems={product.productItems} facetLists={product.facetLists} pageInformation={product.pageInformation}
            data={this.props.item} fromProductSearch={this.props.fromProductSearch} />, document.getElementById('result'));
    }

    handleClick(sortBy, sortAs){
        var searchQuery= this.props.item;
        if(sortAs === "price") {
            sortBy === true ? sortProducts(searchQuery, "priceascending", this.props.fromProductSearch) : sortProducts(searchQuery, "pricedescending", this.props.fromProductSearch);
            this.setState(
                {

                    sortNumber: !(this.state.sortNumber)
                });
        }
        else if(sortAs === "alphabetical") {
            sortBy === true ? sortProducts(searchQuery, "titleascending", this.props.fromProductSearch) : sortProducts(searchQuery, "titledescending", this.props.fromProductSearch);
            this.setState(
                {
                    sortAlphabetical: !(this.state.sortAlphabetical)

                });
        }
        else{

        }

    }

    render() {
        return (
            <div className="clearFix sort">
                    <div className="sortSection">
                        <span>Sort By</span>
                        <a onClick={this.handleClick.bind(this, !this.state.sortNumber, "price")} href="javascript:void(0)"><span className={this.state.sortNumber == true ? "glyphicon glyphicon-sort-by-order-alt" :"glyphicon glyphicon-sort-by-order"}></span> Price </a>
                        <a onClick={this.handleClick.bind(this, !this.state.sortAlphabetical, "alphabetical")} href="javascript:void(0)"><span className={this.state.sortAlphabetical == true ? "glyphicon glyphicon-sort-by-alphabet-alt" :"glyphicon glyphicon-sort-by-alphabet"}></span> Name </a>
                </div>
            </div>);
        }

    componentWillMount() {
        eventHandler.addChangeListener(this._onSortChange, 'SortChange');

    }

    componentWillUnmount() {
        eventHandler.removeChangeListener(this._onSortChange, 'SortChange');
    }

}

Sorting.defaultProps = {fromProductSearch:true};

export default Sorting;