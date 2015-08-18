import React from 'react'
import request from 'request';
import Result1 from './plp';
import {sortProducts , getSortedProducts} from './Action/sortAction';
import event from './Store/sortStore';

class Sorting  extends React.Component
{

    constructor() {
        super();
        this.state = { sortAlphabetical: true , sortNumber : true }

        this._onSortChange = this._onSortChange.bind(this);
    }

    _onSortChange() {

       // this.setState({test: 'changed sort'});
        React.render(<Result1 productItems={JSON.parse(getSortedProducts()).productItems} pageInformation={JSON.parse(getSortedProducts()).pageInformation}
            data={this.props.item}/>, document.getElementById('result'));
    }

    handleClick(sortBy, sortAs){

        var searchQuery= this.props.item;
        if(sortAs === "price") {
            sortBy === true ? sortProducts(searchQuery, "priceascending") : sortProducts(searchQuery, "pricedescending");
            this.setState(
                {

                    sortNumber: !(this.state.sortNumber)
                });
        }
        else if(sortAs === "alphabetical") {
            sortBy === true ? sortProducts(searchQuery, "titleascending") : sortProducts(searchQuery, "titledescending");
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

        event.addChangeListener(this._onSortChange, 'SortChange');

    }

    componentWillUnmount() {

        event.removeChangeListener(this._onSortChange, 'SortChange');

    }

}


export default Sorting;