import React from 'react'

class NoteCreateForm extends React.component {
  constructor(props){
    super(props)
    this.state = {
      note: '',
      price: 0,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    let expense = {...this.state}
    expanse._id = Math.random().toString()

    this.props.note.setState({ expenses: [...this.props.note.state.expenses, expense]})
     // expenses: [...prevState.expenses, this.state]
    //pass data to dashboard state
  }

  render() {
    return(
      <form className="note-create-form" onSubmit={this.hanldeSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.note} //should change name to note i think
          onChange={this.handleChange}
          placeholder="note" />

        <input
          type="number" //passing in 2nd state of price
          name="price"
          value={this.state.price}
          onChange={this.handleChange}
          placeholder="Price" />

        <button type="submit">Spend</button>
      </form>
    )
  }
}

export default NoteCreateForm;

