import { createFeatureSelector, createSelector } from "@ngrx/store";
import { JeuState, Joueur } from "./jeu.reducer";

export interface AppState {
    jeu: JeuState;
}



export const selectJoueurs = createSelector(
    (state: AppState) => state.jeu,
    (jeu: JeuState) => jeu.joueurs
);

export const selectJoueurEnCours = createSelector(
    (state: AppState) => state.jeu,
    (jeu: JeuState) => jeu.joueurEnCours
)