import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Todo } from './todo.model';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private baseUrl = `${environment.apiUrl}/todos`;

  constructor(private http: HttpClient) {}

  // ✅ GET todos
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl);
  }

  // ✅ CREATE todo
  createTodo(title: string): Observable<Todo> {
    return this.http.post<Todo>(this.baseUrl, { title });
  }

  // ✅ UPDATE todo
  updateTodo(id: string, data: Partial<Todo>): Observable<Todo> {
    return this.http.put<Todo>(`${this.baseUrl}/${id}`, data);
  }

  // ✅ DELETE todo
  deleteTodo(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
