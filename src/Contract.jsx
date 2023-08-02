import React, { Component } from 'react'
import './App.css'
import Axios from 'axios'

const url = "http://localhost:3001/products";

class Contract extends Component {

    constructor(props){
        super(props)

        this.state = {
            contract:''
        }
    }

    handleContractChange = event =>{
        this.setState({
            contract: event.target.value
        })
    }
    handleSubmit = event => {
        //MOST IMPORTANT VARIABLE!!!! send to backend
        const contractInfo = (`${this.state.contract}`)

       
        console.log(contractInfo)
        //calling function to call backend
        callBackend(contractInfo);
        event.preventDefault()
    }
    
  
  
    render() {
    return (
      <div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About</a></li>
      </ul>
      <br />&nbsp;<br />
      <form onSubmit={this.handleSubmit}>
        <textarea value = {this.state.contract} onChange={this.handleContractChange} placeholder = "Copy-Paste your contract here" rows="10" cols="50"></textarea>
        <br></br>
        <button type="submit">Summarize</button>
      </form>
      <p id="content-holder">Your Summarized Contract will appear here shortly ...</p>
      </div>
    )
  }
}
//Function to call backend
function callBackend(contractMessage) {
  console.log("callBackend started") ;
  Axios.get(url, {params: { message: contractMessage }}).then(
    (response) => {
      console.log(response);
      var summary = response.data.data.content;
      console.log(summary);
      document.getElementById('content-holder').innerHTML = summary;
    }
  )
  
}


export default Contract