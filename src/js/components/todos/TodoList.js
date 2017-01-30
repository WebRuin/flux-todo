import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    const todos = this.props.todos

    return (
      <section className='todoList'>
        {
          todos.map( function(todo) {
            return (
              <Todo
                key={ todo.id }
                todo={ todo }
                showCompletedTodos={ this.props.showCompletedTodos }
                showIncompletedTodos={ this.props.showIncompletedTodos }
              />
            )
          }, this)
        }
      </section>
    )
  }
}