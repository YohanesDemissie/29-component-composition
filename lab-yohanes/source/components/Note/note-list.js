import React from 'react'
import ExpenseItem from '../../expense/expense-item/expense-item'
import { renderIf } from '../../../lib/utils'

class NoteList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    render(
      <div className="note-list">
        <ul>
          {renderIf(this.props.note,
          this.props.note.map(note => <NoteItem key={note._id} item={note} />))}
        </ul>
      </div>
    )
  }
}

export default NoteList
