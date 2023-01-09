import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Todo } from './todo.model';
import { Observable } from 'rxjs';

import { loadTodos } from '../state/todos/todo.actions';
@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  public allTodos$:Observable<Todo[]> =this.store.select(selectAllTodos);
  public todo='';
  constructor(private store:Store){}
  ngOnInit(): void {
    console.log('in init')
    this.store.dispatch(loadTodos());

  }

removeTodo(todo:Todo){}

  onSubmit(todoForm:NgForm){
   console.log(todoForm.value);
  }
}

function selectAllTodos(selectAllTodos: any): Observable<Todo[]> {
  throw new Error('Function not implemented.');
}
// function selectAllTodos(selectAllTodos: any): Observable<Todo[]> {
//   throw new Error('Function not implemented.');

