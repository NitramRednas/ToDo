import { Injectable } from '@angular/core';
import { ToDo } from '../model/ToDo';
@Injectable()
export class ToDoDataService {

  todos : ToDo[] = [];

  constructor() { 
    this.todos.push(new ToDo('Einkaufen', false));
    this.todos.push(new ToDo('Fleisch pökeln', true, '28.12.2022'));
    this.todos.push(new ToDo('Hinterm Bahnhof prügeln', true));
    this.todos.push(new ToDo('Essen', false, '18.02.2023'));
    this.todos.push(new ToDo('Geschenke kaufen', true, '14.12.2022'));
  }

  saveToDo(toDo : ToDo) {
    this.todos.push(toDo);
  }

  toggleToDo(toDo : ToDo){
    toDo.done = !toDo.done;
    this.todos = this.todos.filter(t => t = t);
  }

}