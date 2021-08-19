import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { TodoListModule } from '@Actions/todo-list.action';
import { TodoListService } from '@Services/todo-list.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Todo } from '@Models/todo.model';

@Injectable()
export class TodoListEffects {
  constructor(
    private todoListService: TodoListService,
    private actions$: Actions
  ) {}

  // @Effect() LoadTodos$: Observable<TodoListModule.Actions> = this.action$.pipe(
  //   ofType(TodoListModule.ActionTypes.LOAD_INIT_TODOS),
  //   switchMap((action) => this.todoListService.getTodos()),
  //   map((todos) => new TodoListModule.SuccessInitTodos(todos)),
  //   catchError(() => of(new TodoListModule.ErrorInitTodos()))
  // );

  LoadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoListModule.ActionTypes.LOAD_INIT_TODOS),
      switchMap((action) => this.todoListService.getTodos()),
      map((todos: Todo[]) => new TodoListModule.SuccessInitTodos(todos)),
      catchError(() => of(new TodoListModule.ErrorInitTodos()))
    )
  );

  // @Effect() LoadCreateTodo$: Observable<TodoListModule.Actions> = this.actions$
  //     .pipe(
  //         ofType<TodoListModule.LoadCreateTodo>(TodoListModule.ActionTypes.LOAD_CREATE_TODO),
  //         switchMap(action => this.todoListService.createTodo(action.payload)),
  //         map(todo => new TodoListModule.SuccessCreateTodo(todo)),
  //         catchError(() => of(new TodoListModule.ErrorCreateTodo()))
  //     );

  LoadCreateTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType<TodoListModule.LoadCreateTodo>(
        TodoListModule.ActionTypes.LOAD_CREATE_TODO
      ),
      switchMap((action) => this.todoListService.createTodo(action.payload)),
      map((todo) => new TodoListModule.SuccessCreateTodo(todo)),
      catchError(() => of(new TodoListModule.ErrorCreateTodo()))
    )
  );

  LoadDeleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType<TodoListModule.LoadDeleteTodo>(
        TodoListModule.ActionTypes.LOAD_DELETE_TODO
      ),
      switchMap((action) => this.todoListService.deleteTodo(action.payload)),
      map((todoId: number) => new TodoListModule.SuccessDeleteTodo(todoId)),
      catchError(() => of(new TodoListModule.ErrorDeleteTodo()))
    )
  );

  LoadUpdateTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType<TodoListModule.LoadUpdateTodo>(
        TodoListModule.ActionTypes.LOAD_UPDATE_TODO
      ),
      switchMap((action) => {
        const { id, ...changes } = action.payload;
        return this.todoListService.updateTodo(changes, id);
      }),
      map((todo: Todo) => new TodoListModule.SuccessUpdateTodo(todo)),
      catchError(() => of(new TodoListModule.ErrorUpdateTodo()))
    )
  );
}
