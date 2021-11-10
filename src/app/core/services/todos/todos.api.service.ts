import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Todo} from "../../../model/Todo";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodosApiService {

  constructor(private http: HttpClient) { }

  fetchTodos(limit: number): Observable<Todo[]> {
    return this.http.get<Todo[]>(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
  }

  postTodo(newTodo: Todo): Observable<Todo> {
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo);
  }

  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  putTodo(id: number, newTodo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, newTodo);
  }

}
