import { createReducer, on } from "@ngrx/store";
import { changerImageEnCours, joueurSuivant } from "./jeu.action";

export interface JeuState {
    images: string[];
    imageEnCours: string;
    joueurs: Joueur[];
    joueurEnCours: Joueur
}

export interface Joueur {
    nom: string;
    score: number;
}

export const initialState: JeuState = {
    images: ['1', '2', '3', '4'],
    imageEnCours: '1',
    joueurs: [{
        nom: 'Taz',
        score: 0,
    },
    {
        nom: 'Sylvain',
        score: 0,
    },
    {
        nom: 'Léa',
        score: 0,
    }],
    joueurEnCours: {
        nom: 'Taz',
        score: 0,
    }
}

const _jeuReducer = createReducer(
    initialState,
    on(changerImageEnCours, (state) => {
        return {
            ...state,
            imageEnCours: state.images[Math.floor(Math.random() * 4) + 1]
        }
    }),
    on(joueurSuivant, (state) => {
        let indexJoueurSuivant: number;
        const indexJoueurEnCours = state.joueurs.findIndex(joueur => joueur.nom === state.joueurEnCours.nom);
        if(indexJoueurEnCours + 1 > state.joueurs.length -1) {
            indexJoueurSuivant = 0;
        } else {
            indexJoueurSuivant = indexJoueurEnCours + 1;
        }
        return {
            ...state,
            joueurEnCours: state.joueurs[indexJoueurSuivant]
        }
    })
);

export function jeuReducer(state, action) {
    return _jeuReducer(state, action);
}