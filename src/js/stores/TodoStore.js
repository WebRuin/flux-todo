import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'

import uuid from 'uuid4'

class TodoStore extends EventEmitter {
  constructor() {
    super()
    this.state = {
      todos: [
        {
          id: uuid(),
          text: 'Go Shopping',
          complete: true
        },
        {
          id: uuid(),
          text: 'Pay Water Bill',
          complete: false
        },
      ],
      showCompletedTodos: true,
      showIncompletedTodos: true
    }

    this.deleteTodo = this.deleteTodo.bind(this)
    this.toggleTodo = this.toggleTodo.bind(this)
    this.toggleShowCompletedTodos = this.toggleShowCompletedTodos.bind(this)
    this.toggleShowIncompletedTodos = this.toggleShowIncompletedTodos.bind(this)
  }

  addTodo(text) {
    this.state.todos.push({
      id: uuid(),
      text,
      complete: false,
    })

    this.emit('change')
  }

  getTodos() {
    return this.state.todos
  }

  getShowCompletedTodos() {
    return this.state.showCompletedTodos
  }

  getShowIncompletedTodos() {
    return this.state.showIncompletedTodos
  }

	// Toggle the showing of completed todos
	toggleShowCompletedTodos() {
		this.state.showCompletedTodos = !this.state.showCompletedTodos
    this.emit('change')
	}

	// Toggle the showing of incompleted todos
	toggleShowIncompletedTodos() {
		this.state.showIncompletedTodos = !this.state.showIncompletedTodos
    this.emit('change')
  }

	deleteTodo(todoToDelete) {
		this.state.todo = this.state.todos.filter( function(todo) {
      return todo.id === todoToDelete.id
    })
    this.emit('change')
	}

	toggleTodo(todoToToggle) {
		this.state.todos = this.state.todos.map(function(todo) {
      if ( todo.id === todoToToggle.id ) {
        todo.complete = !todo.complete
      }
      return todo
    })
    this.emit('change')
	}

  handleActions(action) {
    switch(action.type) {
      case 'ADD_TODO': {
        this.addTodo(action.text)
        break
      }
      case 'TOGGLE_SHOW_COMPLETED_TODOS': {
        this.toggleShowCompletedTodos()
        break
      }
      case 'TOGGLE_SHOW_INCOMPLETED_TODOS': {
        this.toggleShowIncompletedTodos()
        break
      }
      case 'TOGGLE_TODO': {
        this.toggleTodo(action.todo)
        break
      }
      case 'DELETE_TODO': {
        this.deleteTodo(action.todoToDelete)
        break
      }
    }
  }

}

const todoStore = new TodoStore
dispatcher.register(todoStore.handleActions.bind(todoStore))

export default todoStore
