import React from 'react';
import request from 'request';
//import {searchData , getProducts} from './Action/searchAction';
//import events from './Store/searchStore';

class AreaFilters  extends React.Component
{
 

 render() {
        return (
				<div>
					<h3>Area</h3>
					<ul>
						{(this.props.category === 'Aisle') ? <li><a onClick={this.props.onBackToSearchResults.bind(null)}>Back to search results</a></li> : null}
						{(this.props.category === 'Shelf') ? <li><a onClick={this.props.onBackToDepartment.bind(null)}>Back to {this.props.department}</a></li> : null}
						{this.props.facets.map( function (facet){
							return(<li><a onClick={this.props.onAreaFilterSelected.bind(null, facet.facetId, facet.facetName, this.props.category)}>
								{facet.facetName} ({facet.binCount})</a></li>);
						}, this)}
						</ul>
		        </div>		
        );
    }


}



export default AreaFilters;