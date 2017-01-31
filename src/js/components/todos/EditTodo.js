import React from 'react'

import * as TodoAction from '../../actions/TodoActions'

export default class EditTodo extends React.Component {
  render() {
    const todo = this.props.todo

    return (
      <form onSubmit={ this.handleEditTodo.bind(this) }>
        <input className='newText' placeholder={ todo.text } ref='newText' />
        <input className='save' type='submit' value='Save' />
      </form>
    )
  }

  handleEditTodo() {
    TodoAction.editTodo(this.props.todo, this.refs.newText.value)
    TodoAction.toggleEditTodo(this.props.todo)
  }

}