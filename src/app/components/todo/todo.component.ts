import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { TodoRemove } from '../../actions/todo.actions';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: Todo[];

  constructor(private store: Store<{todos: Todo[]}>) {// this todos is coming from app.module storemodule object so we will have to keep there name same
    store.pipe(select('todos')).subscribe(values => {
      this.todos = values;
      console.log(this.todos);
    });

  }

  removeTodo(index){
    this.store.dispatch(new TodoRemove(index));
  }

  ngOnInit(): void {
  }

}
