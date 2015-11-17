/**
 * Created by DQ01 on 05/11/2015.
 */
import AppDispatcher from '../Common/Dispatcher';
import assign from'object-assign';
import {EventEmitter} from  'events';
var CHANGE_EVENT = 'change';


// Define initial data points
var _productDetails = {};

function loadProductDetailsData(data) {
    _productDetails = data.data;
}

var ProductDetailsStore = assign({}, EventEmitter.prototype, {
    getProductDetails: function(data) {
        return _productDetails;
    },


    emitChange: function(_event=CHANGE_EVENT) {
        this.emit(_event);
    },

    addChangeListener: function(callback,_event=CHANGE_EVENT) {
        this.on(_event, callback);
    },

    removeChangeListener: function(callback,_event=CHANGE_EVENT) {
        this.removeListener(_event, callback);
    }
});



AppDispatcher.register(function(action) {
    var text;

    switch (action.action.actionType) {
        case 'GET_PRODUCT_DETAILS_DATA':
            loadProductDetailsData(action.action);
            //ProductDetailsStore.emitChange();
            ProductDetailsStore.emitChange('ProdChange');
            break;
        default:
            break;
    }
});


export default ProductDetailsStore;



