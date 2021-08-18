import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from '@Models/todo.model';
import { select, Store } from '@ngrx/store';
import { AppState } from '@StoreConfig';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TodoListModule } from '@Actions/todo-list.action';
import { selectTodoSelected$ } from '@Selectors/todo-list.selector';

@Component({
  selector: 'app-select-todo',
  templateUrl: './select-todo.component.html',
  styleUrls: ['./select-todo.component.scss'],
})
export class SelectTodoComponent implements OnInit {
  public updateTodoForm: FormGroup;
  public selectTodo$: Observable<Todo | undefined>;
  public selectTodo?: Todo = undefined;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.selectTodo$ = store.pipe(
      select(selectTodoSelected$),
      tap((selectTodos: Todo | undefined) => {
        this.selectTodo = selectTodos;
      })
    );

    this.selectTodo$.subscribe();

    this.updateTodoForm = fb.group({
      title: ['', Validators.required],
      completed: [false],
    });
  }

  ngOnInit(): void {
    if (this.selectTodo) {
      this.updateTodoForm.patchValue({
        title: this.selectTodo.title,
        completed: this.selectTodo.completed,
      });
    }
  }

  updateTodo(formValue: any) {
    const payload = { ...this.selectTodo, ...formValue };
    this.store.dispatch(new TodoListModule.UpdateTodo(payload));
    return this.router.navigate(['/todo-list/all-todos']);
  }
}
