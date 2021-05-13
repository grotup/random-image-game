import { createFeatureSelector, createSelector } from "@ngrx/store";
import { JeuState, Joueur } from "./jeu.reducer";

export interface AppState {
    jeu: JeuState;
}

export const selectJoueurs = createSelector(
    (state: AppState) => state.jeu,
    (jeu: JeuState) => jeu.joueurs
);

export const selectIndexJoueurEnCours = createSelector(
    (state: AppState) => state.jeu,
    (jeu: JeuState) => jeu.indexJoueurEnCours
)

export const selectJoueurEnCours = createSelector(
    (state: AppState) => state.jeu,
    (jeu: JeuState) => jeu.joueurs[jeu.indexJoueurEnCours]
)

export const imageEnCours = createSelector(
    (state: AppState) => state.jeu,
    (jeu: JeuState) => jeu.images[jeu.indexImageEnCours]
)