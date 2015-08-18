import AppDispatcher from '../Common/Dispatcher'
import request from 'request';


var result;

export function searchData(query , pageNo=1) {

    var Header = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };

    request.get({
            url: 'http://localhost:4000/search?search=' + query+'&page='+pageNo,
            headers: Header,
            rejectUnauthorized: false
        },
        function (error, response, body) {

            result = body;

            switch (pageNo) {
                case 1:
                    AppDispatcher.
                        handleViewAction({
                            actionType: 'GET_SEARCH_DATA',
                            data: result
                        });
                    break;
                default :
                    AppDispatcher.
                        handleViewAction({
                            actionType: 'NEXT_PAGE',
                            data: result
                        });
            }
        });


}


export function getProducts()
{
    return result;
}