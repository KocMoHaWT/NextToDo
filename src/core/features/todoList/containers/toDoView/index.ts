import { connect } from 'react-redux';
import { AppState } from '../../../../store/state';
import { ToDoView } from './ToDoView';
import { ToDo } from '../../../../shared/interfaces/toDo';
import { getNextId, getTodos } from '../../todoList.selectors';
import { getFilter } from '../../../../shared/navbar/navbar.selector';

const mapState = (state: AppState): { todos: ToDo[]; nextId: number } => {
  let todoList;
  const todos = getTodos(state);

  switch (getFilter(state)) {
    case 'in progress': {
      todoList = todos.filter(el => !el.completed);
      break;
    }
    case 'completed': {
      todoList = todos.filter(el => el.completed);
      break;
    }
    default: {
      todoList = todos;
    }
  }
  return {
    todos: todoList,
    nextId: getNextId(state),
  };
};

export default connect(mapState)(ToDoView);
