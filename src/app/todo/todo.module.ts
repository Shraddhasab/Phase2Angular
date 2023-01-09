import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoPageComponent } from './todo-page.component';
import { FormsModule } from '@angular/forms';
import { TodoPageRoutingModule } from './todo-routing.module';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';

import { TodoEffects } from '../state/todos/todo.effects';
import { todoReducer } from '../state/todos/todo.reducer';


@NgModule({
  declarations: [
  TodoPageComponent
  ],
  imports: [
    CommonModule ,
    FormsModule,
    TodoPageRoutingModule,
    StoreModule.forFeature('todos',todoReducer),
    EffectsModule.forFeature(TodoEffects)
  ]
})
export class TodoModule { }
