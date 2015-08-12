import AppDispatcher from '../Common/Dispatcher';
import assign from'object-assign';
import {EventEmitter} from  'events';
var CHANGE_EVENT = 'change';






var event = assign({}, EventEmitter.prototype, {


    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
     * @param {function} callback
     */
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});



AppDispatcher.register(function(action) {
    var text;

    switch (action.action.actionType) {
        case 'GET_SEARCH_DATA':
            text = action.action.data.trim();
            if (text !== '') {
                //create(text);
                event.emitChange();
            }
            break;
    }
});


export default event;


