import React from 'react';
import {login} from './Action/LoginAction';
import Result from './searchConponent';
import eventHandler from './Store/loginStore';
import {getCookie , setCookie} from './Helper/helper';
import TrolleyAction from './Action/trolleyAction';


class Login extends React.Component {

    constructor() {
        super();
        this.state = {show: true , error:""};
        this._onLoggedIn = this._onLoggedIn.bind(this);
    }
    handleClick(){
      let password=  React.findDOMNode(this.refs.password).value.trim();
      let email=  React.findDOMNode(this.refs.email).value.trim();
      login(email , password);
    }

    _onLoggedIn(){
        var response= JSON.parse(event.currentTarget.response);

      if(typeof response.sessionToken != "undefined" && response.sessionToken != ""){
          document.getElementsByTagName("body")[0].className ="";
          document.getElementsByClassName("modal-backdrop")[0].className = "";
          setCookie('userSesionToken', response.sessionToken, 1);
          setCookie('emailId', response.name, 1);

          this.setState(
              {

                  show: false,
                  error: ""
              });
          TrolleyAction.getBasketData(false);

      }
        else
            {

                this.setState(
                    {

                        show: true,
                        error: response.message
                    });

      }

    }

    render() {
        return (
                <div>
                    {this.state.show == true ?
                      (<div className="container">
                          <div className="modal fade" id="myModal" role="dialog">
                              <div className="modal-dialog">
                                  <div className="modal-content">
                                      <div className="modal-header loginTopheader">
                                          <button type="button" className="close" data-dismiss="modal">&times;</button>
                                          <h4 className="modal-title">Please Sign in</h4>
                                          <div className="alert-danger">
                                              { this.state.error}
                                          </div>
                                      </div>
                                      <div className="modal-body">
                                          <fieldset>
                                              <div className="form-group">
                                                  <input className="form-control" placeholder="E-mail"ref="email" type="text">
                                                  </input> </div>
                                              <div className="form-group">
                                                  <input className="form-control" placeholder="Password" ref="password" type="password">
                                                  </input></div>

                                              <input className="btn btn-primary col-xs-6"   onClick={this.handleClick.bind(this)} type="button" value="Login">
                                              </input> 
                                              <input className="btn btn-danger col-xs-6 lesswidth" data-dismiss="modal" type="button" value="Cancel"></input>

                                          </fieldset>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>) : "" }
                </div>
        );
    }


    componentWillMount() {
        eventHandler.addChangeListener(this._onLoggedIn,'LoggedIn');
         if(getCookie('userSesionToken')){
          this.setState({ show: false });
           TrolleyAction.getBasketData(false);
        }
    }


    componentWillUnmount() {
        eventHandler.removeChangeListener(this._onLoggedIn ,'LoggedIn');
    }
}
export default Login;
