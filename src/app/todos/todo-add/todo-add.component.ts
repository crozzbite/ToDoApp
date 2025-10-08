import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  standalone: false,
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.scss'
})
export class TodoAddComponent {

  //control
  txtInput: FormControl;

  constructor(private store: Store<AppState>) {

    this.txtInput = new FormControl('', Validators.required);
    
  }
  ngOnInit() : void{

  }

  agregar(){
    if (this.txtInput.invalid) {
      return;
    }
    // alert(this.txtInput.valid);
    console.log(this.txtInput.valid);
    //dispara la accion
    this.store.dispatch( actions.crear({texto: this.txtInput.value}) );

    this.txtInput.reset(); // resetea el unput cada que das enter 
  }
}
