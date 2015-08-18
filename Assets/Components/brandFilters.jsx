import React from 'react';
import request from 'request';

class BrandFilters  extends React.Component
{
 render() {
        return (

            <input type="checkbox" className="more btn btn-primary btn-block" onClick={this.loadMore.bind(this)}>
             </input>
        )
    }
}


export default BrandFilters;