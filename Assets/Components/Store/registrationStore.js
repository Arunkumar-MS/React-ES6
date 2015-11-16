import AppDispatcher from '../Common/Dispatcher';
import assign from'object-assign';
import {EventEmitter} from  'events';







var event = assign({}, EventEmitter.prototype, {



    emitChange: function(event) {
        this.emit(event);
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function(callback,event) {
        this.on(event, callback);
    },

    /**
     * @param {function} callback
     */
    removeChangeListener: function(callback,event) {
        this.removeListener(event, callback);
    }
});



AppDispatcher.register(function(action) {
    var text;

    switch (action.action.actionType) {
        case 'xxxxxxxxxxxxxxxx':
            text = action.action.data;
            if (text !== '') {

                event.emitChange('xxxxxxxxxxxxxxxxxxxxx');
            }
    }
});


export default event;


