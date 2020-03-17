import { ToDo } from '../../shared/interfaces/toDo';

export interface TodoListState {
  todos: ToDo[];
  nextId: number;
}
