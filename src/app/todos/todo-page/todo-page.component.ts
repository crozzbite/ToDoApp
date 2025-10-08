import { Component } from '@angular/core';
import { AppState } from '../../app.reducer';
import {  Store  } from '@ngrx/store';

import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  standalone: false,
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.scss'
})
export class TodoPageComponent {

  completado : boolean = false;

  constructor(private store : Store<AppState>){}

  ngOnInit() :void {
  }

  toggleAll(){
    this.completado = !this.completado;
    this.store.dispatch( actions.toggleAll({completado: this.completado}) );
  }
}
