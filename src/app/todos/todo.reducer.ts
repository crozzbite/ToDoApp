import { createReducer, on } from '@ngrx/store';
import * as action from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('salvar al mundo'),
  new Todo('salvar al mi mama'),
  new Todo('salvar mi reputacion'),
  new Todo('salvar marte'),
];
// aqui se hace la transformacion que se necesite en el estado segun
//la accion que se dispara, por ejemplo en el toggle hacemos un map para que devuelva el nuevo
//arreglo pero con el valor del boolean cambiado
const _todoReducer = createReducer(
  initialState,
  on(action.crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(action.toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        // verificamos que solo modifique el ID del todo que queremos modificar
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  }),
  on(action.editar, (state, { id, texto }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        // verificamos que solo modifique el ID del todo que queremos modificar
        return {
          ...todo,
          texto: texto,
        };
      } else {
        return todo;
      }
    });
  }),
  // regresa todos los elementos que no sean nuestro id asi que lo omite y por lo tanto desaparece
  on(action.borrar, (state, { id }) => state.filter((todo) => todo.id !== id)),

  on(action.toggleAll, (state, { completado }) => {
    return state.map((todo) => {
      return {
        ...todo,
        completado: completado,
      };
    });
  }),

  on(action.limpiarCompletados, state => state.filter(todo => !todo.completado) )
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
