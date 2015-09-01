import AppDispatcher from '../Common/Dispatcher';
import assign from'object-assign';
import {EventEmitter} from  'events';
var CHANGE_EVENT = 'change';

var event = assign({}, EventEmitter.prototype, {

    emitChange: function(_event=CHANGE_EVENT) {
        this.emit(_event);
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function(callback,_event=CHANGE_EVENT) {
        this.on(_event, callback);
    },

    /**
     * @param {function} callback
     */
    removeChangeListener: function(callback,_event=CHANGE_EVENT) {
        this.removeListener(_event, callback);
    }
});



AppDispatcher.register(function(action) {
    var text;

    switch (action.action.actionType) {
        case 'GET_TROLLEY_DATA':
                event.emitChange();
            break;
        default:
            break;
    }
});


export default event;


