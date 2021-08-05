import  { Component } from 'react'


class Header extends Component {

  render() {
      let linkText = ""
      if(this.props.loggedin)
        linkText = "Logout"
    else
        linkText = "Login"
    return (
      <header className="App-header">
        <h1>Sample</h1>
        <nav>
          <ul>
            <li>
              <button className="App-btn" onClick={this.props.logout}>{linkText}</button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header