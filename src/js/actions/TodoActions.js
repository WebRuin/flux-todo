import dispatcher from "../dispatcher";

export function addTodo(text) {
  dispatcher.dispatch({
    type: "ADD_TODO",
    text,
  });
}

export function deleteTodo(todoToDelete) {
  dispatcher.dispatch({
    type: 'DELETE_TODO',
    todoToDelete,
  });
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
