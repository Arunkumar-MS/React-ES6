import AppDispatcher from '../Common/Dispatcher';
import assign from'object-assign';
import {EventEmitter} from  'events';
var CHANGE_EVENT = 'change';


// Define initial data points
let _menuItems = {};

function loadMenuItems(data) {
  _menuItems = JSON.parse(data.data);
}


var MenuStore = assign({}, EventEmitter.prototype, {
    getSuperDeapartmentItem: function() {
        var superDepartment = [];
        for(var i=0; i < _menuItems.length ; i++) {
                var item = _menuItems[i];
                if(item.catId == null && item.parent==null){
                    superDepartment.push(item);
            }
        };
        return superDepartment; 
    },
    
    getDepartmentItem: function(department){
        var departments = [];
        for (var i = 0; i<= _menuItems.length - 1; i++) {
            var item = _menuItems[i];
            if(item.catId == null && item.parent== department){
                departments.push(item);
            }
        };
        return departments;
    },
    
    getAisle:function(aisle){
        var aisles = [];
        for (var i = 0; i<= _menuItems.length - 1; i++) {
            var item = _menuItems[i];
            if(item.catId != null && item.parent == aisle){
                aisles.push(item);
            }
        };
        return aisles;
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
    switch (action.action.actionType) {
        case 'GET_MENU_DATA':
            loadMenuItems(action.action);
            MenuStore.emitChange();
            break;
        default:
            break;
    }
});


export default MenuStore;


