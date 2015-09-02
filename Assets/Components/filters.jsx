var React = require('react');
var request = require('request');
var AreaFilters = require('./areaFilters');
var {searchData , getProducts} = require('./Action/searchAction');
var BrandFilters = require('./brandFilters');
var PromotionFilters = require('./promotionFilters');
var s = require('underscore.string');
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
            <div id="filters" className="col-sm-2 col-lg-2 col-md-2">
                <div className="bs-example" data-example-id="navbar-link">
                    <nav className="navbar">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-5" aria-expanded="false">
                                    <span className="glyphicon glyphicon-filter"></span>
                                </button>
                                <a className="navbar-brand" href="#">Filters</a>
                            </div>
                            <div className="navbar-collapse collapse" id="bs-example-navbar-collapse-5" aria-expanded="false">
                                <div className="navbar-text navbar-right">
                                    <div>
                                        <PromotionFilters facets={promotionFacet.facets} onPromotionSelected={this._onPromotionSelected} />
                                    </div>
                                    <div>
                                         {(areaFacet !== null) ? <AreaFilters facets={areaFacet.facets} category={areaFacet.category}
                                         onAreaFilterSelected={this._onAreaFilterSelected} onBackToSearchResults={this._onBackToSearchResults}
                                         onBackToDepartment={this._onBackToDepartment} department={this.state.departmentName}/> : null}
                                    </div>
                                    <div>
                                        <BrandFilters facets={brandFacet.facets} onBrandSelected={this._onBrandSelected} selectedBrands={this.state.brand}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

            </div>
                </div>
            );
    },

    _onPromotionSelected(facetId, e){
        if(e.target.checked){
            this.setState({promotion: facetId});
             searchData(this.props.searchTerm, 1, this.state.departmentId, this.state.aisleId, this.state.brand, true, facetId);
        }
        else{
            this.setState({promotion: null});
             searchData(this.props.searchTerm, 1, this.state.departmentId, this.state.aisleId, this.state.brand, true, null);
        }
    },

    _onBrandSelected(facetId, e){
        if(e.target.checked){
            var selectedBrands = this.state.brand;
            if(selectedBrands !== null){
             selectedBrands = selectedBrands.concat(facetId, ',');
             this.setState({brand: selectedBrands});
             selectedBrands = s.rtrim(selectedBrands, ',');
             searchData(this.props.searchTerm, 1, this.state.departmentId, this.state.aisleId, selectedBrands, true, this.state.promotion);
            }
            else{
             this.setState({brand: facetId + ','});
             searchData(this.props.searchTerm, 1, this.state.departmentId, this.state.aisleId, facetId, true, this.state.promotion);
            }
        }
        else{
            var brand = this.state.brand;
            brand = brand.replace(facetId + ',', '');
            this.setState({brand: brand});
            brand = s.rtrim(brand, ',');
            brand = s.clean(brand);
            searchData(this.props.searchTerm, 1, this.state.departmentId, this.state.aisleId, brand, true, this.state.promotion);
        }
    },

    _onAreaFilterSelected(selectedFilterId, selectedFilterName, category){
        if(category === 'Department')
        {
            this.setState({departmentId: selectedFilterId, departmentName: selectedFilterName, aisleId: null, aisleName: null});
            searchData(this.props.searchTerm, 1, selectedFilterId, null, this.state.brand === null ? null : this.state.brand, true, this.state.promotion);
        }
        else if(category === 'Aisle')
        {
            this.setState({aisleId: selectedFilterId, aisleName: selectedFilterName});
            searchData(this.props.searchTerm, 1, this.state.departmentId, selectedFilterId, this.state.brand === null ? null : this.state.brand, true, this.state.promotion);
        }
    },

    _onBackToDepartment(){
         this.setState({ aisleId: null, aisleName: null});
         searchData(this.props.searchTerm, 1, this.state.departmentId,null, true, null);
    },

    _onBackToSearchResults(){
        this.setState({selectedFilterId: null, selectedFilterName: null});
        searchData(this.props.searchTerm, 1, null, null, true, null);
    }
});


module.exports = Filters;