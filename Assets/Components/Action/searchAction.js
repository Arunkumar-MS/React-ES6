import AppDispatcher from '../Common/Dispatcher'
import request from 'request';


var result;

export function searchData(query) {

    var Header = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };

    request.get({
            url: 'http://localhost:4000/search?search=' + query,
            headers: Header,
            rejectUnauthorized: false
        },
        function (error, response, body) {

            result=body;
            AppDispatcher.handleViewAction({
                actionType: 'GET_SEARCH_DATA',
                data: query
            });
        });


}


export function getProducts()
{

    return result;
}