import React from 'react';
import request from 'request';
//import {searchData , getProducts} from './Action/searchAction';
//import events from './Store/searchStore';

class AreaFilters  extends React.Component
{
 /*constructor(props) {
        super();
        this.state = { aisleId: null, facets: props.facets, category: props.category, serachTerm: props.searchTerm }
        this._onFacetsUpdated = this._onFacetsUpdated.bind(this);
    }
  propTypes:{
        department  : React.PropTypes.String,
        aisle       : React.PropTypes.String,
        shelf       : React.PropTypes.String,
    }

	handleClick (categoryId, categoryName){
		var searchQuery= this.props.searchTerm;

		if(categoryId === null && categoryName === null)
		{
			searchData(searchQuery);
		}
		else if(this.props.category === 'Department')
		{
			this.setState({
				departmentId:categoryId,
				departmentName:categoryName
			});
			searchData(searchQuery, 1, categoryId);
		}
		else if(this.props.category === 'Aisle')
		{
			this.setState({
				aisleId:categoryId,
				aisleName:categoryName
			});
			searchData(searchQuery, 1, this.state.departmentId, categoryId);
		}
	}

	_onFacetsUpdated(){
		let data;
		data = JSON.parse(event.target.response);
		console.log(data);
		this.setState({ aisleId: null, facets: data.facet.facets, category: data.facet.category, serachTerm: data.searchTerm });
	}*/

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

	//{(this.state.aisleId !== null) ? <li><a onClick={this.handleClick.bind(this, this.state.aisleId, this.state.aisleName)}>Back to {this.state.aisleName}</a></li> : null}
	//{(this.props.category === 'Shelf') ? <li><a onClick={this.handleClick.bind(this, this.props.departmentId, this.state.departmentName)}>Back to {this.state.aisleName}</a></li> : null}
    /*componentWillMount(){
	events.addChangeListener(this._onFacetsUpdated, 'facetsUpdated');
	}*/
}



export default AreaFilters;