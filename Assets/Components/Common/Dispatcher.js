/*
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * AppDispatcher
 *
 * A singleton that operates as the central hub for application updates.
 */

/*

import {Dispatcher} from 'flux';

export default new Dispatcher();
*/


import Flux from 'flux';
import assign from 'object-assign';

/**
 * A singleton that operates as the central hub for application updates.
 * For more information visit https://facebook.github.io/flux/
 */
var Dispatcher = assign(new Flux.Dispatcher(), {

    /**
     * @param {object} action The details of the action, including the action's
     * type and additional data coming from the view.
     */
     handleViewAction(action) {
        var payload = {
            action: action
        };
        this.dispatch(payload);
    }

});
export default Dispatcher;