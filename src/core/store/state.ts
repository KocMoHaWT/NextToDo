import { TodoListState } from '../features/todoList/todoList.state';
import { NavBarState } from '../shared/navbar/navbar.state';

export interface AppState {
  filter: NavBarState;
  todoList: TodoListState;
}

export class Action {
  readonly type: string;

  // eslint-disable-next-line @typescrip  t-eslint/no-explicit-any
  payload: any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toJSON(): Record<string, any> {
    return { ...this };
  }
}

export interface ConnectedProps {
  dispatch?: (act: Action) => void;
}
