import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '@Models/todo.model';
import { Observable } from 'rxjs';
import { environment } from '@Env';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${environment.api}/todos`);
  }

  createTodo(body: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${environment.api}/todos`, body);
  }

  deleteTodo(id: number): Observable<number> {
    return this.http
      .delete<number>(`${environment.api}/todos/${id}`)
      .pipe(map((response) => id));
  }

  updateTodo(partialTodo: Partial<Todo>, id: number): Observable<Todo> {
    return this.http.patch<Todo>(`${environment.api}/todos/${id}`, partialTodo);
  }
}
