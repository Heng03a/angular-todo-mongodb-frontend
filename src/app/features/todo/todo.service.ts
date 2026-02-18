import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  //private apiUrl = `${environment.apiUrl}/api/todos`;
  private apiUrl = 'https://angular-todo-mongodb-backend-production.up.railway.app/api/auth';
  constructor(private http: HttpClient) {}

  // ✅ GET todos
  getTodos(): Observable<any[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  // ✅ CREATE todo
  createTodo(title: string): Observable<any> {
    return this.http.post<Todo>(this.apiUrl, { title });
  }

  // (Optional) UPDATE todo
// ✅ UPDATE todo (partial update)
updateTodo(id: string, data: Partial<Todo>) {
  return this.http.put<Todo>(`${this.apiUrl}/${id}`, data);
}
  // (Optional) DELETE todo
  deleteTodo(id: string): Observable<any> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
