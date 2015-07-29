import React from 'react'


class Sorting  extends React.Component
{


    sort(e)
    {
console.log(e);

    }
render() {

    return (

    <div>



            <div class="per-page">

                <a id="sort_price+desc" onClick={this.sort.bind(this)} href="javascript:void(0)">Price (High)</a>
                <a id="price+asc" onClick={this.sort.bind(this)} href="javascript:void(0)" class="checked">Price (Low)</a>
                <a id="popularity+desc" onClick={this.sort.bind(this)} href="javascript:void(0)">titleascending</a>
                <a id="bestsellers+desc" onClick={this.sort.bind(this)} href="javascript:void(0)">titledescending</a>

        </div>

    </div>);
}


}


export default Sorting;