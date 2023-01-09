import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
// import { getTodos, todosDataState } from 'app/state/todos/todo.selectors';
// import { addTodo,removeTodo, loadTodos  } from 'app/state/todos/todo.actions';
import { Todo } from './todo.model';
import { Observable } from 'rxjs';
import { state } from '@angular/animations';
import { getTodos } from '../state/todos/todo.selectors';
import { addTodo, loadTodos, removeTodo } from '../state/todos/todo.actions';
@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  public allTodos$:Observable<Todo[]> =
  this.store.select(getTodos);
  public todo='';
  constructor(private store:Store){}

  ngOnInit(): void {
    console.log('in init')
    this.store.dispatch(loadTodos());

  }
  onSubmit(todoForm:NgForm) {
    const todo = todoForm.form.value.todo;

    console.log('in submit',todo);
      this.store.dispatch(addTodo({ content: todo }));
      this.todo = '';
    }

    removeTodo(todo: Todo) {
      this.store.dispatch(removeTodo({ id: todo.id }));
    }
}
