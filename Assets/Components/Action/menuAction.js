import AppDispatcher from '../Common/Dispatcher';
import request from 'request';

var MenuAction = {
    getMenuData() {
        var Header = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        request.get({
                url: 'http://localhost:4000/navigation',
                headers: Header,
                rejectUnauthorized: false
            },
            function (error, response, body) {
                let result = body;
                AppDispatcher.
                handleViewAction({
                    actionType: 'GET_MENU_DATA',
                    data: result
                });
            });
    }
};

export default MenuAction;