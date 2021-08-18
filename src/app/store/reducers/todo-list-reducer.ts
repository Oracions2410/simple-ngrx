import { TodoListModule } from '@Actions/todo-list.action';
import { TodoListState, Todo } from '@Models/todo.model';
import { todosMock } from '../../mocks/todo-list-data';

const initialState: TodoListState = {
  data: [],
  loading: false,
  loaded: false,
  selectTodo: undefined,
};

export function todosReducer(
  state: TodoListState = initialState,
  action: TodoListModule.Actions
): TodoListState {
  switch (action.type) {
    case TodoListModule.ActionTypes.INIT_TODOS:
      return {
        ...state,
        data: [...action.payload],
      };

    case TodoListModule.ActionTypes.CREATE_TODO:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case TodoListModule.ActionTypes.DELETE_TODO:
      return {
        ...state,
        data: state.data.filter((todo: Todo) => todo.id !== action.payload),
      };

    case TodoListModule.ActionTypes.SELECT_TODO:
      return {
        ...state,
        selectTodo: action.payload,
      };

    case TodoListModule.ActionTypes.UPDATE_TODO:
      return {
        ...state,
        data: state.data.map((todo: Todo) => {
          if (action.payload.id === todo.id) {
            return action.payload;
          }
          return todo;
        }),
      };

    default:
      return state;
  }
}
