import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../model/ToDo';
import { ToDoDataService } from '../../services/to-do-data.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  toDo :ToDo;

  constructor(private ToDoDataService : ToDoDataService) { }

  ngOnInit() {
  }

  get toDos(): ToDo[] {
    return this.ToDoDataService.toDos;
  }

  toggle(toDo : ToDo){
    this.ToDoDataService.toggleToDo(toDo);
  }
}