import React from 'react'
import request from 'request';
import Result1 from './plp';

class Sorting  extends React.Component
{

    constructor() {
        super();
        this.state = { sortAlphabetical: true , sortNumber : true }
    }

    alphabeticalSort(e) {

        switch (this.state.sortAlphabetical) {

            case true:
            this.Sort('titleascending');
                break;
            case false:
                this.Sort('titledescending');
                break;

        }
        this.setState(
            {
                sortAlphabetical: !(this.state.sortAlphabetical)

            });


    }

    numberSort(e) {
        switch (this.state.sortNumber) {

            case true:
                this.Sort('priceascending');
                break;
            case false:
                this.Sort('pricedescending');
                break;

        }


        this.setState(
            {

                sortNumber: !(this.state.sortNumber)
            });


    }



    Sort(sortBy) {
//console.log("search"+React.findDOMNode(this.refs.search).value);

        var Header = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        var search = this.props.item;
        request.get({
                url: 'http://localhost:4000/search?search=' + search+'&sortBy='+sortBy,
                headers: Header,
                rejectUnauthorized: false
            },
            function (error, response, body) {


                React.render(<Result1 productItems={JSON.parse(body).productItems} pageInformation={JSON.parse(body).pageInformation}
                                      data={search}/>, document.getElementById('result'));
            }.bind(this));




    }








render() {

    return (

    <div className="clearFix sort">



            <div className="sortSection">
                <span>Sort By</span>
                <a onClick={this.numberSort.bind(this)} href="javascript:void(0)"><span className={this.state.sortNumber == true ? "glyphicon glyphicon-sort-by-order" :"glyphicon glyphicon-sort-by-order-alt"}></span> Price </a>
                <a onClick={this.alphabeticalSort.bind(this)} href="javascript:void(0)"><span className={this.state.sortAlphabetical == true ? "glyphicon glyphicon-sort-by-alphabet" :"glyphicon glyphicon-sort-by-alphabet-alt"}></span> Name </a>


        </div>

    </div>);
}


}


export default Sorting;