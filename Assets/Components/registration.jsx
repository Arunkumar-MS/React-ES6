import React from 'react';
import {registration} from './Action/registrationAction';

class Registration extends React.Component {




		
		  
	handleClick(e) {
		var email = document.getElementById('email').value;
       	var passwordfieldone = document.getElementById('password').value;
    	var passwordfieldtwo = document.getElementById('confirm-password').value;
    	registration(email , password);


		/*let password=  React.findDOMNode(this.refs.password).value.trim();
		let email=  React.findDOMNode(this.refs.email).value.trim();
	    registration(email , password);*/


    	var regex = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
		
		if(regex.test(email)){   
	    	if((passwordfieldone !== "") && (passwordfieldtwo !== ""))
	    	{
	    		if(passwordfieldone == passwordfieldtwo) 
		    	{
		    		return true; 
		    	}
		    	else{
		    		alert("Password Mismatch");
		    		return false;
		    	}
	    	}
	    	else{
	    		alert("Password should not be empty");
	    		return false; 
	    	}
		}
		else{
			alert("Enter a valid email");
			document.getElementById("email").focus();
		    return false;
		}
	}


    render() {

        return (
        	<div className="container">
                          <div className="modal fade" id="myRegistrationModel" role="dialog">
                              <div className="modal-dialog">
                                  <div className="modal-content">
                                      <div className="modal-header loginTopheader">
                                          <button type="button" className="close" data-dismiss="modal">&times;</button>
                                          <h4 className="modal-title">Registration</h4>
                                      </div>
                                      <div className="modal-body">

            	<div className="row" id="xx">
				    <div className="col-xs-12">
						<form role="form" action="http://localhost:4000/">
							<h4>Step <small>1</small></h4>
							<hr className="colorgraph" />
							<div className="form-group">
								<input type="text" name="display_name" id="display_name" className="form-control " placeholder="Display Name" tabindex="3" />
							</div>
							<div className="form-group">
								<input type="email" name="email" id="email" className="form-control" placeholder="Email Address" tabindex="4" />
							</div>
							<div className="row">
								<div className="col-xs-12 col-sm-6 col-md-6">
									<div className="form-group">
										<input type="password" name="password" id="password" className="form-control" placeholder="Password" tabindex="5" />
									</div>
								</div>
								<div className="col-xs-12 col-sm-6 col-md-6">
									<div className="form-group">
										<input type="password" name="confirm-password" id="confirm-password" className="form-control" placeholder="Confirm Password" tabindex="6" />
									</div>
								</div>
								<div id="errormessage"></div>
								<div className="col-xs-12">
									Passwords are case sensitive and must contain a letter, a number, and be a minimum of 8 characters.
								</div>
							</div>
							
							<hr className="colorgraph" />
							<div className="row">
								<div className="col-xs-12">
								<input type="checkbox" name="t_and_c" id="t_and_c" className="d" value="1" />
									 &nbsp;I agree to receive communications from Tesco (Poland) Sp. of o.o. by means of electronic communication of business information within the meaning of the Act dated. 18 July 2002 on the provision of electronic services (Journal of Laws No. 144, pos. 1204).
								</div>
							</div>
							<hr className="colorgraph" />
							<div className="row">
								<div className="col-xs-12 col-md-6"><input type="submit" onClick={this.handleClick} value="Register" className="btn btn-primary btn-block" tabindex="7" /></div>
								<div className="col-xs-12 col-md-6"><a href="#" className="btn btn-success btn-block">Sign In</a></div>
							</div>
						</form>
					</div>
				</div>
									</div>
                                  </div>
                              </div>
                          </div>
                      </div>
        );
    }
}
export default Registration;