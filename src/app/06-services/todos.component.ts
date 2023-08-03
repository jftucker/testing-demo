import { Component } from '@angular/core';
import { TodoService } from './todo.service'

@Component( {
  selector: 'app-root',
  templateUrl: '../app.component.html',
  styleUrls: ['../app.component.css']
} )
export class TodosComponent { 
  todos: any[] = [];
  message; 

  constructor(private service: TodoService) {}

  ngOnInit() { 
    this.service.getTodos().subscribe(t => this.todos = t);
  }

  add() { 
    var newTodo = { title: '... ' };
    this.service.add(newTodo).subscribe(
      t => this.todos.push(t),
      err => this.message = err);
  }

  delete(id) {
    if (confirm('Are you sure?'))
      this.service.delete(id).subscribe();
  }  
}
