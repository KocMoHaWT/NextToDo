import { AppState } from '../../store/state';
import { ToDo } from '../../shared/interfaces/toDo';

export const getTodos = ({ todoList: { todos } }: AppState): ToDo[] => todos;
export const getNextId = ({ todoList: { nextId } }: AppState): number => nextId;
