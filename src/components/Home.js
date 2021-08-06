import { Component } from "react";

class Home extends Component{
    render(){
        return (<main className="App-content">
            <section className="App-text">
            Welcome  {this.props.userid}
            </section>
        </main>)
    }
}


export default Home