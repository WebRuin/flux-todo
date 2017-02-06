import React from 'react'

// Flux
import * as TodoActions from '../actions/TodoActions'
import TodoStore from '../stores/TodoStore'

// Style
import Style from './style.scss'

// Components
import HistoricalTodoList from '../components/todos/HistoricalTodoList'

export default class TodoHistory extends React.Component {
  constructor() {
    super()
    this.state = {
      deletedTodos: TodoStore.getDeletedTodos()
    }
    this.getDeletedTodos = this.getDeletedTodos.bind(this)
  }

  componentWillMount() {
    TodoStore.fetchDeletedUserState()
    TodoStore.on('change', this.getDeletedTodos)
  }

  componentWillUnmount() {
    TodoStore.removeListener('change', this.getDeletedTodos)
  }

  getDeletedTodos() {
    this.setState({
      deletedTodos: TodoStore.getDeletedTodos()
    })
  }

  render() {
    return (
      <div className='app'>
        <h2>Todo History</h2>
        <HistoricalTodoList historicalTodos={ this.state.deletedTodos } />
      </div>
    )
  }
}
