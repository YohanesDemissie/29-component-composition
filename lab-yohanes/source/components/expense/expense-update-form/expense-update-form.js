import React from 'react';
class ExpenseUpdateForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.expense ? //if theres expense on props coming from form
    this.props.expense :
    {
      _id: '',
      name: '',
      price: 0,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){ //on subbmit, affect (e)
    e.preventDefault()
    this.props.dashboard.setState(prevState => { //find id of previous state and override it (update it)
      expenses: prevState.expenses.map(expense =>
        expense._id === this.state._id ? this.state :expense)
    })
  }

  handleChange(e) { //how we are gonna affect (e)
    this.setState({[e.target.name]: e.target.value}) //changing the name and 
  }

    render() {
      return (
        <form className="expense-update-form" onSubmit={this.handleSubmit}>
          <input type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}/>
          <input type="number"
            name="price"
            value={this.state.price}
            onChange={this.handleChange}/>
          <button type="button">update</button>
          <button type="button" onClick={this.props.close}>cancel</button>
        </form>
      )
    }
  }