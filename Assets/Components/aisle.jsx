import React from 'react';
import request from 'request';
import Result1 from './plp';
import {searchData , getProducts} from './Action/searchAction';
import eventHandler from './Store/searchStore';
 var categoryId = '';
class Aisle extends React.Component {
   
    constructor() {
        super();
        this.state = {test: 'hello'};
        this._onCategoryChange = this._onCategoryChange.bind(this);
    }
    _onCategoryChange() {
      document.getElementById('subnavigation').style.display = 'none';
      var Products= JSON.parse(event.currentTarget.response);

        React.render(<Result1 productItems={Products.productItems}
                              pageInformation={Products.pageInformation}
                              facetLists={Products.facetLists}
                              data={categoryId} fromProductSearch={false}/>, document.getElementById('result'));
    }

    componentWillMount() {
        eventHandler.addChangeListener(this._onCategoryChange);
    }

    componentWillUnmount() {
        eventHandler.removeChangeListener(this._onCategoryChange);
    }
    getProductByCategoryId(e){
        categoryId = e.currentTarget.title;
        console.log(categoryId);
        searchData(categoryId,1,null,null,null,false);
    }
    render() {
        var self=this;
        document.getElementById('aisle').style.display='block';

        var aisleMenu = this.props.aisles.map(function(sd){
            return (<a onClick={self.getProductByCategoryId.bind(this)}  title={sd.catId}>{sd.name}</a>);
        });
        return (<div>
                {aisleMenu}
            </div>
        )

    }
}

export default Aisle;