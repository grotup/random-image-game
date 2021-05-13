import { createAction, props } from "@ngrx/store";

export const changerImageEnCours = createAction('changerImageEnCours');
export const joueurSuivant = createAction('joueurSuivant');

export const changerImage = createAction('changerImage');

export const bonneReponse = createAction('[plateau] bonneReponse')