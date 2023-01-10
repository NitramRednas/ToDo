import { Injectable } from '@angular/core';
import { ToDo } from '../model/ToDo';
@Injectable()
export class ToDoDataService {

  todos : ToDo[] = [];

  constructor() { 
    this.todos.push(new ToDo('Einkaufen', false));
  }

}