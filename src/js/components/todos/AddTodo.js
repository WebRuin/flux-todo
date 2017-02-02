import React from 'react'
import uuid from 'uuid4'

// Flux
import * as TodoActions from '../../actions/TodoActions'
import TodoStore from '../../stores/TodoStore'

const AddTodo = React.createClass({
  getInitialState: function() {
    return {}
  },

  render() {
    return (
      <form className='addTodoForm' ref='addTodoForm' onSubmit={this.handleAddTodo}>
        <input className='input' onChange={ this.handleChange } placeholder='Add Todo' />
        <input className='button' type='submit' value='Add to the list' />
      </form>
    )
  },

  handleAddTodo(e) {
    e.preventDefault()

    if(this.state.newTodo) {
      TodoActions.addTodo(this.state.newTodo)

      TodoActions.postTodo({
        complete: false,
        id: TodoStore.setID() - 1,
        text: this.state.newTodo,
        edit: false
      })
    }

    this.refs.addTodoForm.reset()
  },

  handleChange(e) {
    this.setState({
      newTodo: e.target.value
    })
  }

  // End Class
})

module.exports = AddTodo