var React = require('react');
var request = require('request');
var AreaFilters = require('./areaFilters');
var {searchData , getProducts} = require('./Action/searchAction');
//import events from './Store/searchStore';

var Filters = React.createClass(  //extends React.Component
{
    getInitialState(){
        return {
                //initailFacetList: this.props.facetLists,
                departmentId: null,
                departmentName: null,
                aisleId: null,
                aisleName: null
            };
    },

 render() {
    var areaFacet = this.props.facetLists.filter(function(facet){
                return (facet.category !== 'Brand' && facet.category !== 'Promotion');
            });
        return (
            <div>
                 <AreaFilters facets={areaFacet[0].facets} category={areaFacet[0].category} searchTerm={this.props.searchTerm} 
                 onAreaFilterSelected={this._onAreaFilterSelected} onBackToSearchResults={this._onBackToSearchResults}
                 onBackToDepartment={this._onBackToDepartment} department={this.state.departmentName}/>
            </div>
        );
    },

    _onAreaFilterSelected(selectedFilterId, selectedFilterName, category){
        if(category === 'Department')
        {
            this.setState({departmentId: selectedFilterId, departmentName: selectedFilterName, aisleId: null, aisleName: null});
            searchData(this.props.searchTerm, 1, selectedFilterId);
        }
        else if(category === 'Aisle')
        {
            this.setState({aisleId: selectedFilterId, aisleName: selectedFilterName});
            searchData(this.props.searchTerm, 1, this.state.departmentId, selectedFilterId);
        }
    },

    _onBackToDepartment(){
         this.setState({ aisleId: null, aisleName: null});
         searchData(this.props.searchTerm, 1, this.state.departmentId,null);
    },

    _onBackToSearchResults(){
        this.setState({selectedFilterId: null, selectedFilterName: null});
        searchData(this.props.searchTerm, 1, null, null);
    }
});


module.exports = Filters;