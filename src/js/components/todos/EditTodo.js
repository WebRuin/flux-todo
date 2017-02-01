import React from 'react'

import * as TodoAction from '../../actions/TodoActions'

export default class EditTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editedTodo: ''
    }
    this.handleEditTodo = this.handleEditTodo.bind(this)
    this.handleTodoChange = this.handleTodoChange.bind(this)
  }

  componentDidMount() {
    this.setState({
      editedTodo: this.props.todo.text
    })
  }

  render() {
    const todo = this.props.todo

    return (
      <form onSubmit={ this.handleEditTodo } >
        <input value={ this.state.editedTodo } onChange={ this.handleTodoChange } />
        <button type='submit'><i class="fa fa-floppy-o" aria-hidden="true"></i></button>
      </form>
    )
  }

  handleEditTodo(e) {
    e.preventDefault()
    TodoAction.editTodo(this.props.todo, this.state.editedTodo)
  }

  handleTodoChange(e) {
    this.setState({
      editedTodo: e.target.value
    })
  }
}