import AppDispatcher from '../Common/Dispatcher'
import request from 'request';
import {getCookie} from '../Helper/helper';

var result, miniTrolleyResult;

export function getBasketData() {
    console.log(getCookie('userSesionToken'));
    var Header = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'session': getCookie('userSesionToken')
    };

    request.get({
            url: 'http://localhost:4000/trolley',
            headers: Header,
            rejectUnauthorized: false
        },
        function (error, response, body) {
            result = body;
            AppDispatcher.
            handleViewAction({
                actionType: 'GET_TROLLEY_DATA',
                data: result
            });
        });
}

export function getBasket() {
    return result;
}
export function addToMiniTrolley(productData) {

    var Header = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
   /* var miniTrolleyUri = 'http://localhost:4000/miniTrolley?id=' + productData.id+'&newUnitChoice='+productData.newUnitChoice+'&oldUnitChoice='+productData.oldUnitChoice+'&newValue='+productData.newValue+'&oldValue='+productData.oldValue;

    request.get({
        url: miniTrolleyUri,
        headers: Header,
        rejectUnauthorized: false
    },
        function (error, response, body) {

            miniTrolleyResult = body;
            AppDispatcher.handleViewAction({
                actionType: 'ADD_TO_MINITROLLEY',
                data: miniTrolleyResult
            });

        });    */


    request({ url: 'http://localhost:4000/miniTrolley',rejectUnauthorized: false ,headers: Header, method: 'PUT', json: productData},

     function (error, response, body) {

         miniTrolleyResult = body;
         AppDispatcher.handleViewAction({
         actionType: 'ADD_TO_BASKET',
         data: miniTrolleyResult
         });

     });

}

export function getMiniTrolleyData() {

    return miniTrolleyResult;

}