import React from 'react'
import {renderIf} from '../../../lib/utils'
import ExpenseUpdateForm from '../expense-update-form/expense-update-form'

class ExpenseItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      item: this.props.item ? this.props.item : {},
      editing: false,
    }

    this.handleEditing.bind(this)
  }

  handleEditing() {
    this.setState({editing: this.state.editing})
  }

  render() {
    return (
      <li className="expense-item"
        id={this.state._id}
        onDoubleClick={this.handleEditingEditing}>
        <p>Name: {this.state.name} </p>
        <p>Price: {this.state.price} </p>
        {renderIf(this.state.editing,
        <ExpenseUpdateForm expense={this.state.item} close={this.handleEditing} dashboard={this.getOrSetState()}/>
        )}
      </li>
    )
  }
}

export default ExpenseItem;