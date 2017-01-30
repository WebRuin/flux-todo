import React from 'react'

// Flux
import * as TodoActions from '../../actions/TodoActions'

export default class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this)
    this.handleCompleteToggle = this.handleCompleteToggle.bind(this)
  }

  render() {
    const todo = this.props.todo
    let className = ''
    if (
      ( todo.complete && !this.props.showCompletedTodos ) || 
      ( !todo.complete && !this.props.showIncompletedTodos ) ) {
      className = 'todo hide'
    } else {
      className = 'todo'
    }

    return (
      <div className={className}>
        <input type='checkbox' onChange={ this.handleCompleteToggle } defaultChecked={ todo.complete }/>
        <div>{todo.text}</div>
        <button onClick={ this.handleDeleteTodo }>X</button>
      </div>
    )
  }

  handleDeleteTodo() {
    TodoActions.deleteTodo(this.props.todo)
  }

  handleCompleteToggle(e) {
    TodoActions.toggleTodo(this.props.todo)
  }
}