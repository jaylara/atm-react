import React, { Component } from 'react';

export default class Account extends Component {
  constructor (props) {
    super(props);
    this.state = {
      balance: 0
    }

    //adds amount to balance, only if amount is a valid number
    this._addAmount = (e) => {
      var parsedValue = parseFloat(this.refs.amount.value);
      if(!Number.isNaN(parsedValue)) {
        this.setState({balance: this.state.balance + parsedValue});
        this.sendTransactionUpdate(this.props.name, "Added", parsedValue);
      } // end of if
      this.refs.amount.value = "";
    } // end of _addAmount()

    //subtracts amount from balance, only if amount is a valid number
    // and amount is less than or equal to balance
    this._subtractAmount = (e) => {
      var parsedValue = parseFloat(this.refs.amount.value);
      if(!Number.isNaN(parsedValue) && parsedValue <= this.state.balance) {
        this.setState({balance: this.state.balance - parsedValue});
        this.sendTransactionUpdate(this.props.name, "Removed", parsedValue);
      } // end of if
      this.refs.amount.value = "";
    } // end of _subtractAmount()


  }//end of constructor

  //send a transaction message to the parent that the account has been updated.
  sendTransactionUpdate = (accountName, action, value) => {
    this.props.onUpdate(`${accountName}: ${action} $${value}`);
  } // end of sendTransactionUpdate()

  render() {
    let balanceClass = 'balance';

    if(this.state.balance === 0) {
        balanceClass += ' zero';
    } // end of if

    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>{this.state.balance.toFixed(2)}</div>
        <input type="text" placeholder="enter an amount" ref="amount" />
        <input type="button" value="Deposit" onClick={this._addAmount}/>
        <input type="button" value="Withdraw" onClick={this._subtractAmount}/>
      </div>
    )
  }
}
