import AppDispatcher from '../Common/Dispatcher'
import request from 'request';
import {getCookie} from '../Helper/helper';

var TrolleyAction = {
     getBasketData(renderTrolley = true) {
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
                let _data = body;
                AppDispatcher.
                handleViewAction({
                    actionType: 'GET_TROLLEY_DATA',
                    data: _data,
                    renderTrolley: renderTrolley
                });
            });
    },
    addToMiniTrolley(productData,renderTrolley = false) {
        var Header = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'session': getCookie('userSesionToken')
        };
        request({ url: 'http://localhost:4000/miniTrolley',rejectUnauthorized: false ,headers: Header, method: 'PUT', json: productData},

         function (error, response, body) {


             request.get({
                     url: 'http://localhost:4000/trolley',
                     headers: Header,
                     rejectUnauthorized: false
                 },
                 function (error, response, basket) {
             let _data = basket;
                 AppDispatcher.handleViewAction({
                    actionType: 'ADD_TO_MINITROLLEY',
                     data: _data,
                     renderTrolley: renderTrolley
             });
                 });

         });
    }

};

export default TrolleyAction;