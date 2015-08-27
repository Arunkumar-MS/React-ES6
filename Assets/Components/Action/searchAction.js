import AppDispatcher from '../Common/Dispatcher'
import request from 'request';


var result;

export function searchData(query , pageNo=1, department=null, aisle=null) {

var searchUri = 'http://localhost:4000/search?search=' + query+'&page='+pageNo ;

    var Header = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };

    if(department !== null && department != 'null'){
        searchUri = searchUri + '&department=' + department;
    }

    if(aisle !== null && aisle !== 'null'){
        searchUri = searchUri + '&aisle=' + aisle;
    }

    request.get({
            url: searchUri,
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