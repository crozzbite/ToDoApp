import { Component, ElementRef, Input, ViewChild } from '@angular/core';

import { Store } from '@ngrx/store';
import * as actions from '../todo.actions';

import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-todo-item',
  standalone: false,
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {

  @Input()  todo! : Todo;

  checkCompletado!: FormControl;
  txtInput!: FormControl;
  editando: boolean = false;
  @ViewChild('inputFisico') txtInputFisico!:ElementRef;


  constructor(private store: Store<AppState>){
  }

  ngOnInit(): void{
    
    this.checkCompletado = new FormControl( this.todo.completado);
    this.txtInput= new FormControl(this.todo.texto, Validators.required)

    this.checkCompletado.valueChanges.subscribe(valor => {
      this.store.dispatch( actions.toggle({id: this.todo.id}) );
    })
  }

   editar() {
    this.editando = true;
    this.txtInput.setValue( this.todo.texto );

    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
    

  }

  terminarEdicion() {
    this.editando = false;

    if( this.txtInput.invalid ) { return; }
    if( this.txtInput.value === this.todo.texto ) { return; }


    this.store.dispatch( 
      actions.editar({
        id: this.todo.id,
        texto: this.txtInput.value
      })
    );
  }

  borrar(){

    this.store.dispatch(actions.borrar({id: this.todo.id}));

  }

}
