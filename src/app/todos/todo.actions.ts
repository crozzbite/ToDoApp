import { createAction, props } from "@ngrx/store";

export const crear = createAction(
     '[TODO] Crear todo',
     props<{texto: string}>()
        );

export const toggle = createAction(
   '[TODO] toggle Todo',
   props<{ id: number }>()
);

export const editar = createAction(
   '[TODO] Editar Todo',
   props<{id: number, texto: string}>()
);

export const borrar = createAction(
   '[TODO] borrar Todo',
   props<{id: number }>()
);

export const toggleAll = createAction(
   '[TODO] ToggleALL',
   props<{completado: boolean}>()
)
export const limpiarCompletados = createAction(
     '[Filstro] Delete Completados'
)
