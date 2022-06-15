import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TodoService} from './todo.service';

let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.todoService.getAll().subscribe(todos => {
      this.todos = todos;
    });
  }

  toggleTodo(todo: Todo) {
    todo.complete = !todo.complete;
    this.todoService.updateTodo(todo.id, todo).subscribe(
      todos => {
        this.getAll();
      }
    );
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        content: value,
        complete: false
      };
      this.todoService.saveCategory(todo).subscribe(todos => {
        this.content.reset();
        this.getAll();
      });
    }
  }


  delete(id: number) {
    this.todoService.deleteTodo(id).subscribe(todos => {
      this.todoService.deleteTodo(id);
      this.getAll();
    });
  }
}
