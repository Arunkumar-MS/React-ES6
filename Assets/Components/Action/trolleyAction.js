import AppDispatcher from '../Common/Dispatcher'
import request from 'request';
import {getCookie} from '../Helper/helper';

var result;

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