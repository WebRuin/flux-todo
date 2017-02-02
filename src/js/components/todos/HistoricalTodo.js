import React from 'react'

// Flux
import * as TodoActions from '../../actions/TodoActions'

// Components
import EditTodo from './EditTodo'

export default class Todo extends React.Component {
  constructor(props) {
    super(props)

    this.handleRestoreTodo = this.handleRestoreTodo.bind(this)
  }

  render() {
    const todo = this.props.todo

    return (
      <div className='historicalTodo'>
        { todo.text }
        <button onClick={ this.handleRestoreTodo }>Restore</button>
      </div>
    )
  }

  handleRestoreTodo() {
    TodoActions.restoreTodo(this.props.todo)
  }
}