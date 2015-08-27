import React from 'react';
import request from 'request';

class BrandFilters  extends React.Component
{
 render() {
        return (
        	<div>
	        	<h3>Brand</h3>
	        	<ul>
	        		{this.props.facets.map( function(facet){
	        			return(<li><input type="checkbox" onChange={this.props.onBrandSelected.bind(null, facet.facetId)} >
	        			 {facet.facetName} ({facet.binCount}) </input></li>);
	        		}, this)

	        	}
	        	</ul>
        	</div>
        )
    }
}


export default BrandFilters;