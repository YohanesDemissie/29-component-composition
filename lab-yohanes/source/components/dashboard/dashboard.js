import React from 'react'
import Modal from '../modal/modal'
import { renderIf } from '../../lib/utils'
import ExpenseList from '../expense/expense-list/expense-list'
import ExpenseCreateForm from '../expense/expense-create-form/expense-create-form'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expense: [], //same as var expense = []
      budget: 444, //$444 budget
      showError: false,
    }

    this.getOrSetState = this.getOrSetState.bind(this)
  }

  getOrSetState() {
    return {
      state: this.state,
      setState: this.setState.bind(this)
    }
  }

  render() {
    let totalSpend = this.state.expenses.reduce((a, b) => a + parseInt(b.price), 0);
    let remainingBudget = this.state.budget - totalSpend

    return (
      <div className="main-content">
        <section className="main-data">
          <p>Budget: ${this.state.budget}</p>
          <p>Total Spend: ${totalSpend}</p>
          <p>Remaining Balance: ${remainingBudget}</p>
        </section>

          <ExpenseCreateForm dashboard={this.getOrSetState()}/>
          <ExpenseList expenses={this.state.expenses} dashboard={this.getOrSetState()}/>
        {renderIf(remainingBudget < 0 && !this.state.showError, //if we over spend, throw error
        <Modal close={() => this.setState({showError: !this.state.showError})}>
        <section>
          <h1>Stuff will be here that makes sense</h1>
        </section>
        </Modal>
        )}

      </div>
    )
  }
}

export default Dashboard;