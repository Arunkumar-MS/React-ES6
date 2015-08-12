import AppDispatcher from './Dispatcher'
import request from 'request';


var searchData;

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

            searchData=body;
            AppDispatcher.handleViewAction({
                actionType: 'GET_SEARCH_DATA',
                data: query
            });
        });


}


export function getProducts()
{

    return searchData;
}