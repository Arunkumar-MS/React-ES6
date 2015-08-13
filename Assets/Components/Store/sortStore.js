/**
 * Created by DQ01 on 13/08/2015.
 */

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
        case 'GET_SORT_DATA':

                event.emitChange('SortChange');

            break;

        default:
            break;

    }
});

export default event;



