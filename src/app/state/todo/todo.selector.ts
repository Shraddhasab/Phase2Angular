import { createSelector } from "@ngrx/store";
import { createFeatureSelector } from "@ngrx/store";
import * as  AppState  from "../app.state";
import { TodoState } from "./todos.state";
//first get the reference of feature selector
export const todosDataState =
createFeatureSelector<TodoState>('todos');

//use that feature selector to get the selector 
export const getTodos =createSelector(todosDataState,state=>state.todos);
