import React from 'react'

// Flux
import * as TodoActions from '../../actions/TodoActions'

// Components
import EditTodo from './EditTodo'

export default class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this)
    this.handleToggleEditTodo = this.handleToggleEditTodo.bind(this)
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

    let todoItem = todo.edit ? <EditTodo todo={todo} /> : <div>{todo.text}</div>

    return (
      <div className={className}>
        <input type='checkbox' onChange={ this.handleCompleteToggle } defaultChecked={ todo.complete }/>
        { todoItem }
        <button className='edit' onClick={ this.handleToggleEditTodo }>edit</button>
        <button onClick={ this.handleDeleteTodo }>X</button>
      </div>
    )
  }

  handleToggleEditTodo() {
    console.log(this.props.todo)
    TodoActions.toggleEditTodo(this.props.todo)
  }

  handleDeleteTodo() {
    TodoActions.deleteTodo(this.props.todo)
  }

  handleCompleteToggle(e) {
    TodoActions.toggleTodo(this.props.todo)
  }
}