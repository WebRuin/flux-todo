import React from 'react'

// Flux
import * as TodoActions from '../actions/TodoActions'
import TodoStore from '../stores/TodoStore'

// Style
import Style from './style.scss'

// Components
import AddTodo from '../components/todos/AddTodo'
import TodoList from '../components/todos/TodoList'

export default class Todos extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: TodoStore.getTodos(),
      showCompletedTodos: TodoStore.getShowCompletedTodos(),
      showIncompletedTodos: TodoStore.getShowIncompletedTodos()
    }
    this.getState = this.getState.bind(this)
  }

  componentWillMount() {
    TodoStore.fetchUserState()
    TodoStore.on('change', this.getState)
  }

  componentWillUnmount() {
    TodoStore.removeListener('change', this.getState)
  }

  getState() {
    this.setState({
      todos: TodoStore.getTodos(),
      showCompletedTodos: TodoStore.getShowCompletedTodos(),
      showIncompletedTodos: TodoStore.getShowIncompletedTodos()
    })
  }

  render() {

    return (
      <div className='app'>
        <h1>React Flux Todos</h1>
        
        <AddTodo />

        <section className='toggles'>
          <div>
            <input
              type='checkbox' className='checkbox'
              defaultChecked={ this.state.showIncompletedTodos }
              onChange={ TodoActions.toggleShowIncompletedTodos }
            />
            <span>show incomplete</span>
          </div>
          <div>
            <input
              type='checkbox' className='checkbox'
              defaultChecked={ this.state.showCompletedTodos }
              onChange={ TodoActions.toggleShowCompletedTodos }
            />
            <span>show complete</span>
          </div>
        </section>

        <TodoList
          todos={ this.state.todos }
          showCompletedTodos={ this.state.showCompletedTodos }
          showIncompletedTodos={ this.state.showIncompletedTodos }
        />
      </div>
    )
  }
}
