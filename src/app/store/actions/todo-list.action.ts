import { Todo } from '@Models/todo.model';

export namespace TodoListModule {
  export enum ActionTypes {
    // INIT_TODOS = '[todolist] Init Todos',
    CREATE_TODO = '[todoliist] create todo',
    DELETE_TODO = '[todolist] Delete todo',
    SELECT_TODO = '[todolist] select todo',
    UPDATE_TODO = '[todolist] update todo',

    LOAD_INIT_TODOS = '[todolist] load init todos',
    SUCCESS_INIT_TODOS = '[todolist] success init todos',
    ERROR_INIT_TODOS = '[todolist] Error init todos',

    LOAD_CREATE_TODO = '[todolist] Load Create Todo',
    SUCCESS_CREATE_TODO = '[todolist] Success create todo',
    ERROR_CREATE_TODO = '[todolist] Error create todo',

    LOAD_DELETE_TODO = '[todolist] Load Delete Todo',
    SUCCESS_DELETE_TODO = '[todolist] Success Delete Todo',
    ERROR_DELETE_TODO = '[todolist] Error Delete Todo',

    LOAD_UPDATE_TODO = '[todolist] Load Update todo',
    SUCCESS_UPDATE_TODO = '[todolist] Success update todo',
    ERROR_UPDATE_TODO = '[todolist] Error Update todo',
  }

  // export class InitTodos {
  //   readonly type = ActionTypes.INIT_TODOS;
  //   constructor(public payload: Todo[]) {}
  // }

  export class LoadInitTodos {
    readonly type = ActionTypes.LOAD_INIT_TODOS;
  }

  export class SuccessInitTodos {
    readonly type = ActionTypes.SUCCESS_INIT_TODOS;
    constructor(public payload: Todo[]) {}
  }

  export class ErrorInitTodos {
    readonly type = ActionTypes.ERROR_INIT_TODOS;
  }

  // export class CreateTodo {
  //   readonly type = ActionTypes.CREATE_TODO;
  //   constructor(public payload: Todo) {}
  // }

  export class LoadCreateTodo {
    readonly type = ActionTypes.LOAD_CREATE_TODO;
    constructor(public payload: Todo) {}
  }

  export class SuccessCreateTodo {
    readonly type = ActionTypes.SUCCESS_CREATE_TODO;
    constructor(public payload: Todo) {}
  }

  export class ErrorCreateTodo {
    readonly type = ActionTypes.ERROR_CREATE_TODO;
  }

  // export class DeleteTodo {
  //   readonly type = ActionTypes.DELETE_TODO;
  //   constructor(public payload: number) {}
  // }

  export class LoadDeleteTodo {
    readonly type = ActionTypes.LOAD_DELETE_TODO;
    constructor(public payload: number) {}
  }

  export class SuccessDeleteTodo {
    readonly type = ActionTypes.SUCCESS_DELETE_TODO;
    constructor(public payload: number) {}
  }

  export class ErrorDeleteTodo {
    readonly type = ActionTypes.ERROR_DELETE_TODO;
  }

  // export class UpdateTodo {
  //   readonly type = ActionTypes.UPDATE_TODO;
  //   constructor(public payload: Todo) {}
  // }

  export class LoadUpdateTodo {
    readonly type = ActionTypes.LOAD_UPDATE_TODO;
    constructor(public payload: Todo) {}
  }

  export class SuccessUpdateTodo {
    readonly type = ActionTypes.SUCCESS_UPDATE_TODO;
    constructor(public payload: Todo) {}
  }

  export class ErrorUpdateTodo {
    readonly type = ActionTypes.ERROR_UPDATE_TODO;
  }

  export class SelectTodo {
    readonly type = ActionTypes.SELECT_TODO;
    constructor(public payload: Todo) {}
  }

  export type Actions =
    | LoadInitTodos
    | SuccessInitTodos
    | ErrorInitTodos
    // | CreateTodo
    | LoadCreateTodo
    | SuccessCreateTodo
    | ErrorCreateTodo
    // | DeleteTodo
    | LoadDeleteTodo
    | SuccessDeleteTodo
    | ErrorDeleteTodo
    | SelectTodo
    // | UpdateTodo;
    | LoadUpdateTodo
    | SuccessUpdateTodo
    | ErrorUpdateTodo;
}
