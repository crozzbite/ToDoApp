import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
// paquetes que no hisiste arriba , y los que tu hisiste abajo 
import { Todo } from '../models/todo.model';
import { AppState } from '../../app.reducer';
import { filtrosValidos } from '../../filtro/filtro.actions';


@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  
  todos: Todo[] = [];
  filtroActual: filtrosValidos = "todos";

  constructor(private store: Store<AppState>){
  }
//    this.store.select((state: any) => state.todos).subscribe((todos: Todo[]) => this.todos = todos);

  ngOnInit(): void {
    //  this.store.select('todos')
    //   .subscribe( todos => this.todos = todos );

    this.store.subscribe(({todos, filtro}) => {
      this.todos = todos;
      this.filtroActual = filtro;
    });
  }
}
