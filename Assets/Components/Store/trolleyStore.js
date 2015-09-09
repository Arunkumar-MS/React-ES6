import AppDispatcher from '../Common/Dispatcher';
import assign from'object-assign';
import {EventEmitter} from  'events';
var CHANGE_EVENT = 'change';


// Define initial data points
var _basketItems = {}, _renderTrolley = true;

function loadBasketItems(data) {
  _basketItems = data.data;
  _renderTrolley = data.renderTrolley;
}


var TrolleyStore = assign({}, EventEmitter.prototype, {
    getBasketItem: function(data) {
        return _basketItems; 
    },

    getTrolleyToBeRendered: function(){
        return _renderTrolley;
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
        case 'GET_TROLLEY_DATA':
            loadBasketItems(action.action);
            TrolleyStore.emitChange('TrolleyChange');
            break;
        case 'ADD_TO_MINITROLLEY':
            loadBasketItems(action.action);
            TrolleyStore.emitChange('TrolleyChange');

            break;
        default:
            break;
    }
});


export default TrolleyStore;


