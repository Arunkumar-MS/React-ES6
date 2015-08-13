import AppDispatcher from '../Common/Dispatcher'
import request from 'request';

var result;

export function sortProducts(search , sortAs) {

    var Header = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };

    request.get({
            url: 'http://localhost:4000/search?search=' + search+'&sortBy='+sortAs,
            headers: Header,
            rejectUnauthorized: false
        },
        function (error, response, body) {

            result = body;
            AppDispatcher.handleViewAction({
                actionType: 'GET_SORT_DATA',
                data: result
            });

        });

}

export function getSortedProducts() {

    return result;

}