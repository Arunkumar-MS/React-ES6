import AppDispatcher from '../Common/Dispatcher'
import request from 'request';



export function login(email , pwd) {

    var loginUri = 'http://localhost:4000/login?email=' + email+'&pwd='+pwd ;

    var Header = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };

    var requestData= {
        "Email": email,
        "Password": pwd,
        "IpAddress": "127.0.0.1"
    }
    request({ url: 'http://localhost:4000/login',rejectUnauthorized: false ,headers: Header, method: 'PUT', json: requestData},

        // request.get({
   //         url: loginUri,
     //       headers: Header,
    //        rejectUnauthorized: false
       // },
        function (error, response, body) {




                    AppDispatcher.
                        handleViewAction({
                            actionType: 'LOGIN',
                            data: body
                        });



});
}
