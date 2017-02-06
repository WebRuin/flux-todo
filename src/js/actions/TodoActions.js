import dispatcher from "../dispatcher";

export function addTodo(text) {
  dispatcher.dispatch({
    type: 'ADD_TODO',
    text,
  });
}

export function deleteTodo(todoToDelete) {
  dispatcher.dispatch({
    type: 'DELETE_TODO',
    todoToDelete,
  });
}

export function editTodo(todoToEdit, newText) {
  dispatcher.dispatch({
    type: 'EDIT_TODO',
    todoToEdit,
    newText
  })
}

export function postTodo(todo) {
  dispatcher.dispatch({
    type: 'POST_TODO',
    todo
  })
}

export function restoreTodo(todo) {
  dispatcher.dispatch({
    type: 'RESTORE_TODO',
    todo
  })
}

export function setID() {
  dispatcher.dispatch({
    type: 'SET_ID'
  })
}

export function toggleEditTodo(todoToEdit) {
  dispatcher.dispatch({
    type: 'TOGGLE_EDIT_TODO',
    todoToEdit
  })
}

export function toggleShowCompletedTodos() {
  dispatcher.dispatch({
    type: 'TOGGLE_SHOW_COMPLETED_TODOS'
  })
}

export function toggleShowIncompletedTodos() {
  dispatcher.dispatch({
    type: 'TOGGLE_SHOW_INCOMPLETED_TODOS'
  })
}

export function toggleTodo(todo) {
  dispatcher.dispatch({
    type: 'TOGGLE_TODO',
    todo,
  });
}
