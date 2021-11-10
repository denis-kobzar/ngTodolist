import { Component } from '@angular/core';
import {Todo} from "./model/Todo";
import {TodosApiService} from "./core/services/todos/todos.api.service";
import {ToastService} from "./core/services/toasts/toast.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngTodolist';

  todos: Todo[] = [];
  showToast: boolean = false;

  constructor(private todosApiService: TodosApiService,
              private toastService: ToastService) {
    todosApiService.fetchTodos(10)
      .subscribe(todos => {
        this.todos = todos;
      });
  }

}
