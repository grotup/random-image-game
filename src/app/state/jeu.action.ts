import { createAction, props } from "@ngrx/store";
import { Joueur } from "../models/partie.model";

export const changerImageEnCours = createAction('changerImageEnCours');
export const joueurSuivant = createAction('joueurSuivant');

export const bonneReponse = createAction('[plateau] bonneReponse');

export const changerImage = createAction('[image] changerImage');

export const augmenterScore = createAction(
    '[plateau] augmenterScore',
    props<{joueur: Joueur}>()
);

export const diminuerScore = createAction(
    '[plateau] diminuerScore',
    props<{joueur: Joueur}>()
);