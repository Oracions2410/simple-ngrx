import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Todo } from '@Models/todo.model';
import { AppState } from '@StoreConfig';
import { selectTodos$ } from '@Selectors/todo-list.selector';
import { TodoListModule } from '@Actions/todo-list.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.scss'],
})
export class AllTodosComponent implements OnInit {
  todos$: Observable<Todo[]>;

  todoForm: FormGroup;

  private todolength: number;

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    // Initialization
    this.todolength = 0;

    this.todos$ = store.pipe(
      select(selectTodos$),
      tap((todos: Todo[]) => (this.todolength = todos.length))
    );
    this.todoForm = this.formBuilder.group({
      title: ['', Validators.required],
      completed: [false],
    });
  }

  ngOnInit(): void {
    // this.store.dispatch(new TodoListModule.InitTodos());
  }

  createTodo(todo: Todo) {
    const payload = { ...todo, userId: 1, id: this.todolength + 1 };

    this.store.dispatch(new TodoListModule.CreateTodo(payload));
    this.todoForm.reset();
  }

  deleteTodo(id: number): void {
    this.store.dispatch(new TodoListModule.DeleteTodo(id));
  }

  selectTodo(todo: Todo): void {
    this.store.dispatch(new TodoListModule.SelectTodo(todo));
    this.router.navigate(['/todo-list/select-todo']);
  }
}
