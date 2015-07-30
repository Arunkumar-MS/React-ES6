import React from 'react'


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

        this.setState(
            {

                sortNumber: !(this.state.sortNumber)
            });


    }
     Sort(sortBy)
    {


console.log(this.props.item +  sortBy);


    }





render() {

    return (

    <div>



            <div class="per-page">

                <a className={this.state.sortNumber == true ? "priceascending" :"pricedescending"} onClick={this.numberSort.bind(this)} href="javascript:void(0)">{this.state.sortNumber == 1 ? "priceascending" :"pricedescending"} </a>
                <a className={this.state.sortAlphabetical == true ? "titleascending" :"titledescending"} onClick={this.alphabeticalSort.bind(this)} href="javascript:void(0)">{this.state.sortAlphabetical == 1 ? "titleascending" :"titledescending"}</a>


        </div>

    </div>);
}


}


export default Sorting;