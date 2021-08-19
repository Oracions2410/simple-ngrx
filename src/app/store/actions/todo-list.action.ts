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

  export class CreateTodo {
    readonly type = ActionTypes.CREATE_TODO;
    constructor(public payload: Todo) {}
  }

  export class DeleteTodo {
    readonly type = ActionTypes.DELETE_TODO;
    constructor(public payload: number) {}
  }

  export class UpdateTodo {
    readonly type = ActionTypes.UPDATE_TODO;
    constructor(public payload: Todo) {}
  }

  export class SelectTodo {
    readonly type = ActionTypes.SELECT_TODO;
    constructor(public payload: Todo) {}
  }

  export type Actions =
    | LoadInitTodos
    | SuccessInitTodos
    | ErrorInitTodos
    | CreateTodo
    | DeleteTodo
    | SelectTodo
    | UpdateTodo;
}
