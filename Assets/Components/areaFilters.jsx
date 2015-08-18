import React from 'react';
import request from 'request';

class AreaFilters  extends React.Component
{
 render() {
        return (
				<div>
					<h3>Area</h3>
					<ul>
						{this.props.facets.map(function (facet){
							return(<li>{facet.facetName}</li>);
						})}
						</ul>
		        </div>		
        );
    }
}


export default AreaFilters;