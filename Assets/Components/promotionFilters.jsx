import React from 'react';
import request from 'request';

class PromotionFilters  extends React.Component
{
 render() {
        return (
            <div>
                <h3>Promotion</h3>
                <ul>
                    {this.props.facets.map( function(facet){
                        return(<li><input type="checkbox" onChange={this.props.onPromotionSelected.bind(null, facet.facetId)} >
                         Promotion ({facet.binCount}) </input></li>);
                    }, this)

                }
                </ul>
            </div>
        )
    }
}


export default PromotionFilters;