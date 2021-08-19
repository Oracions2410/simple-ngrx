import { TodoListModule } from '@Actions/todo-list.action';
import { TodoListState, Todo } from '@Models/todo.model';

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
    // case TodoListModule.ActionTypes.INIT_TODOS:
    //   return {
    //     ...state,
    //     data: [...action.payload],
    //   };

    case TodoListModule.ActionTypes.LOAD_INIT_TODOS:
      console.log('init');
      return {
        ...state,
        loading: true,
        loaded: false,
      };

    case TodoListModule.ActionTypes.SUCCESS_INIT_TODOS:
      console.log('success');
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload,
      };

    case TodoListModule.ActionTypes.ERROR_INIT_TODOS:
      console.log('error');
      return {
        ...state,
        loaded: false,
        loading: false,
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
