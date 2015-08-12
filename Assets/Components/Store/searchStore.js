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
        case 'GET_SEARCH_DATA':
            text = action.action.data.trim();
            if (text !== '') {
                //create(text);
                event.emitChange();
            }
            break;
        case 'NEXT_PAGE':
            text = action.action.data.trim();
            if (text !== '') {

                event.emitChange('PageChange');
            }
            break;


    }
});


export default event;


