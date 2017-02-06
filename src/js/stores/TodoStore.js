import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'
import axios from 'axios'
import uuid from 'uuid4'

class TodoStore extends EventEmitter {
  constructor() {
    super()
    this.state = {
      todos: [],
      showCompletedTodos: true,
      showIncompletedTodos: true
    }
  }

  addTodo(text) {
    let newTodo = {
      complete: false,
      edit: false,
      id: uuid(),
      text
    }
    this.state.todos.push(newTodo)
    console.log(newTodo)
    this.postTodo(newTodo)

    this.emit('change')
  }

  addTodoFromDB(todo) {
    this.state.todos.push(todo)

    this.emit('change')
  }

	deleteTodo(todoToDelete) {
		this.state.todos = this.state.todos.filter( function(todo) {
      return todo.id !== todoToDelete.id
    })
    this.postToDeleted(todoToDelete)
    this.deleteFromTodoDB(todoToDelete.id)
    
    this.emit('change')
	}

  deleteFromTodoDB(id) {
    axios.delete('http://localhost:3000/todos/' + id)
  }

	editTodo(todoToEdit, newText) {
		this.state.todos = this.state.todos.map(function(todo) {
      if ( todo.id === todoToEdit.id ) {
        todo.text = newText
        todo.edit = !todo.edit
      }
      return todo
    })
    this.emit('change')
	}

  fetchUserState() {
    let th = this
    this.serverRequest = 
      axios.get('http://localhost:3000/todos')
        .then(function(result) {
          result.data.map((data) => {
            th.addTodoFromDB(data)
          })  
        })
  }

  getShowCompletedTodos() {
    return this.state.showCompletedTodos
  }

  getShowIncompletedTodos() {
    return this.state.showIncompletedTodos
  }

  getTodos() {
    return this.state.todos
  }

  postToDeleted(todo) {
    axios.post('http://localhost:3000/deleted-todos', todo)
  }

  postTodo(todo) {
    axios.post('http://localhost:3000/todos', todo)
  }

  toggleEditTodo(todoToToggle) {
		this.state.todos = this.state.todos.map(function(todo) {
      if ( todo.id === todoToToggle.id ) {
        todo.edit = !todo.edit
      }
      return todo
    })
    this.emit('change')
	}

	toggleShowCompletedTodos() {
		this.state.showCompletedTodos = !this.state.showCompletedTodos
    this.emit('change')
	}
  
	toggleShowIncompletedTodos() {
		this.state.showIncompletedTodos = !this.state.showIncompletedTodos
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
      case 'DELETE_TODO': {
        this.deleteTodo(action.todoToDelete)
        break
      }
      case 'EDIT_TODO': {
        this.editTodo(action.todoToEdit, action.newText)
        break
      }
      case 'POST_TODO':
        this.postTodo(action.todo)
        break
      case 'SET_ID':
        this.setID()
        break
      case 'TOGGLE_EDIT_TODO': {
        this.toggleEditTodo(action.todoToEdit)
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
    }
  }

}

const todoStore = new TodoStore
dispatcher.register(todoStore.handleActions.bind(todoStore))

export default todoStore
