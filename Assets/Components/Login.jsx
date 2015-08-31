import React from 'react';
import {login} from './Action/LoginAction';
import Result from './searchConponent';
import eventHandler from './Store/loginStore';
import {getCookie , setCookie} from './Helper/helper'


class Login extends React.Component {

    constructor() {
        super();

        this.state = {show: true};
        this._onLoggedIn = this._onLoggedIn.bind(this);
    }
    handleClick()
    {

      let password=  React.findDOMNode(this.refs.password).value.trim();
      let email=  React.findDOMNode(this.refs.email).value.trim();
        login(email , password);
    }

    _onLoggedIn()
    {
        var response= JSON.parse(event.currentTarget.response);
        //response.sessionToken



        setCookie('userSesionToken',response.sessionToken,1);
        getCookie('userSesionToken');
      console.log(getCookie('userSesionToken'));
        this.setState(
            {

                show: false
            });
    }

    render() {
        return (



            <div>
                {  this.state.show == true ?
             <div className="container">
                <div className="row vertical-offset-100">
                    <div className="col-md-4 col-md-offset-4">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Please sign in</h3>
                            </div>
                            <div className="panel-body">

                                    <fieldset>
                                        <div className="form-group">
                                            <input className="form-control" placeholder="E-mail"ref="email" type="text">
                                            </input> </div>
                                            <div className="form-group">
                                                <input className="form-control" placeholder="Password" ref="password" type="password">
                                                </input></div>

                                                    <input className="btn btn-lg btn-success btn-block"  onClick={this.handleClick.bind(this)} type="button" value="Login">
                                                        </input>
                                                        </fieldset>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                : ""}
                        </div>
        );
    }


    componentWillMount() {


        eventHandler.addChangeListener(this._onLoggedIn,'LoggedIn');
    }


    componentWillUnmount() {
        eventHandler.removeChangeListener(this._onLoggedIn ,'LoggedIn');
    }
}
export default Login;
