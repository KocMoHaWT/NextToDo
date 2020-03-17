import { Action } from '../../store/state';
import { ToDo } from '../../shared/interfaces/toDo';

export enum todoListActions {
  ADD_TODO = '[todoList] add todo',
  REMOVE_TODO = '[todoList] remove todo',
  TOGGLE_COMPLETE_TODO = '[todoList] toggle complete todo',
}

export class AddTodoAct extends Action {
  readonly type = todoListActions.ADD_TODO;

  constructor(public payload: { todo: ToDo }) {
    super();
  }
}

export class RemoveTodoAct extends Action {
  readonly type = todoListActions.REMOVE_TODO;

  constructor(public payload: { id: number }) {
    super();
  }
}

export class ToggleCompleteTodoAct extends Action {
  readonly type = todoListActions.TOGGLE_COMPLETE_TODO;

  constructor(public payload: { id: number }) {
    super();
  }
}

export type TodoListActionsType = AddTodoAct | RemoveTodoAct | ToggleCompleteTodoAct;
