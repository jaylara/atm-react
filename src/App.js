import React, { Component } from 'react';
import logo from './ga.png';

import Account from './Account';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      transactionHistory: []
    }
  } // end of constructor

  //update transaction history array with message from Account
  updateTransactionHistory = (message) => {
    var newTH = this.state.transactionHistory;
    newTH.push({message});
    this.setState({transactionHistory : newTH});
  } // end of updateTransactionHistory()

  render() {
    let transactionHistory = "";
    //render transaction history only is transaction history is valid
    if(this.state.transactionHistory)
      transactionHistory = this.state.transactionHistory.map( (trans, idx) => (
        <li key={idx}>{trans.message}</li>
      ));
    return (
      <div id="content">
        <div id="nav">
          <div id="logo"><img src={logo} alt="General Assembly logo" /></div>
          <div id="title">Bank of GA</div>
        </div>
        <Account name={'Checking'} onUpdate={this.updateTransactionHistory}/>
        <Account name={'Savings'} onUpdate={this.updateTransactionHistory}/>

        {/*TODO: Consider placing this area in TransactionHistory Component later */}
        <div className="transaction-history">
          <h2>Transaction History</h2>
          <ul>{transactionHistory}</ul>
          <div className="clear"></div>
        </div>
      </div>
    );
  } // end of render()
} // end of class App

export default App;
