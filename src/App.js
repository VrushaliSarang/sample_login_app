
import React, { Component } from 'react';
import './App.css';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Home from './components/Home';
import Login from './components/login/Login';

 

class  App extends Component { 
  constructor(){
    super()
    this.state = {
      isLoggedIn :  false,
      userId: '',
      password:''
    }
    this.inputUserId = React.createRef()
    this.inputPassword = React.createRef()
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }
  handleLogin(event){
   
      this.setState({ isLoggedIn:true,userId:this.inputUserId.current.value, password:this.inputPassword.current.value})
     

 }
 handleLogout(event){
   this.setState({isLoggedIn :  false, 
    userId: '',
    password:''})
 }
  render(){
 
  let show
  
  const loggedin = this.state.isLoggedIn
  if(loggedin)
    show = <Home userid={this.state.userId} />
  else
    show = <Login handlelogin= {this.handleLogin} inputuserid={this.inputUserId} inputpassword={this.inputPassword}/>
  return (
    <div className="App">
     
     <Header className="app-header" loggedin={this.state.isLoggedIn} logout={this.handleLogout}/>
     
      {show}
     <Footer/>
    </div>
  )}
}

export default App;
