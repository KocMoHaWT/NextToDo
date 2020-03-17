import { TodoListState } from './todoList.state';
import * as acts from './todoList.actions';

const initialState: TodoListState = {
  todos: [],
  nextId: 0,
};

export default function(state = initialState, action: acts.TodoListActionsType): TodoListState {
  switch (action.type) {
    case acts.todoListActions.ADD_TODO: {
      const {
        payload: { todo },
      } = action as acts.AddTodoAct;

      return { nextId: ++state.nextId, todos: [...state.todos, todo] };
    }
    case acts.todoListActions.REMOVE_TODO: {
      const {
        payload: { id },
      } = action as acts.RemoveTodoAct;

      return { ...state, todos: [...state.todos.filter(todo => todo.id !== id)] };
    }
    case acts.todoListActions.TOGGLE_COMPLETE_TODO: {
      const {
        payload: { id },
      } = action as acts.ToggleCompleteTodoAct;

      return {
        ...state,
        todos: [...state.todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))],
      };
    }
    default:
      return state;
  }
}
