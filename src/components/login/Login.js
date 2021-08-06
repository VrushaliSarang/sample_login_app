import React, { Component } from "react";

class Login extends Component{

   
    
    render(){
        return (
          <div className="App-content">
            <form onSubmit={this.props.handlelogin} className="Login-form">
            <div className="Form-elements">
              <label>
                User ID:
                </label>
                <input
                  type="text"
                  ref={this.props.inputuserid}
                  id="userid"
                />
       
              </div>
              <div className="Form-elements">
              <label>
                Password:
                </label>
                <input
                  type="text"
                  ref={this.props.inputpassword}
                  id="password"
                />
             
              </div>
              <input type="submit" value="Login" className="Form-btn" />
            </form>
            
          </div>
        );
    }
}

export default Login