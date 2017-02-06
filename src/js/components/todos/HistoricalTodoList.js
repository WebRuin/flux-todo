import React from 'react'
import Todo from './Todo'

// Components
import HistoricalTodo from './HistoricalTodo'

export default class HistoricalTodoList extends React.Component {
  render() {
    const historicalTodos = this.props.historicalTodos

    return (
      <section className='todoList'>
        {
          historicalTodos.map( function(todo) {
            return (
              <HistoricalTodo
                key={ todo.id }
                todo={ todo }
              />
            )
          }, this)
        }
      </section>
    )
  }
}