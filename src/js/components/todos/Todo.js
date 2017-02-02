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

    let isComplete = todo.complete ? 'complete' : ''
    let todoItem = todo.edit ? <EditTodo todo={todo} /> : <div className={ isComplete }>{todo.text}</div>
    let edit = todo.complete ? '' : <button className='edit' onClick={ this.handleToggleEditTodo }><i className='fa fa-pencil-square-o' aria-hidden='true'></i></button>

    return (
      <div className={className}>
        <input className='todoCheckbox' type='checkbox' onChange={ this.handleCompleteToggle } defaultChecked={ todo.complete }/>
        { todoItem }
        { edit }
        <button onClick={ this.handleDeleteTodo }><i className='fa fa-trash-o' aria-hidden='true'></i></button>
      </div>
    )
  }

  handleCompleteToggle(e) {
    TodoActions.toggleTodo(this.props.todo)
  }

  handleDeleteTodo() {
    TodoActions.deleteTodo(this.props.todo)
  }

  handleToggleEditTodo() {
    TodoActions.toggleEditTodo(this.props.todo)
  }
}