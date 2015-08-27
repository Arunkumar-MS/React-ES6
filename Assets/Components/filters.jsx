var React = require('react');
var request = require('request');
var AreaFilters = require('./areaFilters');
var {searchData , getProducts} = require('./Action/searchAction');
var BrandFilters = require('./brandFilters');
//import events from './Store/searchStore';

var Filters = React.createClass(  //extends React.Component
{
    getInitialState(){
        return {
                //initailFacetList: this.props.facetLists,
                departmentId: null,
                departmentName: null,
                aisleId: null,
                aisleName: null,
                brand: null
            };
    },

 render() {
    var areaFacet = null;
    var brandFacet = null;
    var promotionFacet = null;

    this.props.facetLists.map(function(facet){
                if(facet.category !== 'Brand' && facet.category !== 'Promotion'){
                    areaFacet = facet;
                }
                else if(facet.category === 'Brand'){
                    brandFacet = facet;
                }
                else if(facet.category === 'Promotion'){
                    promotionFacet = facet;
                }
            });

        return (<div>
                    <div>
                         {(areaFacet !== null) ? <AreaFilters facets={areaFacet.facets} category={areaFacet.category}  
                         onAreaFilterSelected={this._onAreaFilterSelected} onBackToSearchResults={this._onBackToSearchResults}
                         onBackToDepartment={this._onBackToDepartment} department={this.state.departmentName}/> : null}
                    </div>
                    <div>
                        <BrandFilters facets={brandFacet.facets} onBrandSelected={this._onBrandSelected} selectedBrands={this.state.brand}/>
                    </div>
                </div>
            );
    },

    _onBrandSelected(facetId){
        var selectedBrands = this.state.brand;
        if(selectedBrands !== null){
         this.setState({brand: selectedBrands + ',' + facetId});
         searchData(this.props.searchTerm, 1, this.state.departmentId, this.state.aisleId, this.state.brand);
        }
        else{
         this.setState({brand: facetId});
         searchData(this.props.searchTerm, 1, this.state.departmentId, this.state.aisleId, facetId);
        }
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