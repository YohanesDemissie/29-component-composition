import React from 'react'

class NoteItem extends React.Component {
  constructor(props) {
    super(props)
    this.state.props = this.props ? this.props.item : {}
  }

  render() {
    return (
      <li className="note-list" id={this.state._id}>
        <p> Note: {this.state.note} </p>
        <p>Price: {this.state.price}</p>
        {/* dynamically renderiing note and price from note-create-form file */}
      </li>
    )
  }
}

export default NoteItem
