import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ToDoDataService } from './services/to-do-data.service';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ToDoListComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ToDoDataService]
})
export class AppModule { }
