import { createReducer, on, Action } from '@ngrx/store';
import { filtrosValidos , setFiltro }from '../filtro/filtro.actions'


export const initialState: filtrosValidos = 'todos';

const _filtroReducer  = createReducer<filtrosValidos>(
     initialState,
     on(setFiltro, (_state, {filtro} )=> filtro ),
     );

export function filtroReducer(state: filtrosValidos | undefined, action: Action) {
    return _filtroReducer(state, action);
}