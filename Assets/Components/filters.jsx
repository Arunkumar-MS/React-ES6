import React from 'react';
import request from 'request';
import AreaFilters from './areaFilters';

class Filters  extends React.Component
{
 render() {
        return (
        	<div>
    			{this.props.facetLists.map(function (facet, i) {
    				return(<div>
    					{facet.category === 'Department' ? <AreaFilters facets={facet.facets} /> : null}
    					</div>);
    			})}
            </div>
        );
    }
}


export default Filters;