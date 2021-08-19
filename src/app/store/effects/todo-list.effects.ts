import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { TodoListModule } from '@Actions/todo-list.action';
import { TodoListService } from '@Services/todo-list.service';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class TodoListEffects {
  @Effect() LoadTodos$: Observable<TodoListModule.Actions> = this.action$.pipe(
    ofType(TodoListModule.ActionTypes.LOAD_INIT_TODOS),
    switchMap((action) => this.todoListService.getTodos()),
    map((todos) => new TodoListModule.SuccessInitTodos(todos)),
    catchError(() => of(new TodoListModule.ErrorInitTodos()))
  );

  constructor(
    private todoListService: TodoListService,
    private action$: Actions
  ) {}
}
