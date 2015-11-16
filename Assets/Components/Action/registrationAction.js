import AppDispatcher from '../Common/Dispatcher'
import request from 'request';



export function registration(email , pwd) {

    var registrationUri = 'http://localhost:4000/user?email=' +email+'&password='+password;

    var Header = { 'Content-Type': 'application/json', 'Accept': 'application/json' };

    var requestData= {
        "email": email,
        "password": password
    }
    request({ url: 'http://localhost:4000/user',headers: Header, method: 'POST', json: requestData},
        function (error, response, body) {
                    AppDispatcher.
                        handleViewAction({
                            actionType: 'REGISTRATION',
                            data: body
                        });



});
}
