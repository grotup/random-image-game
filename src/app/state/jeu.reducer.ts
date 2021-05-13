import { ɵNullViewportScroller } from "@angular/common";
import { createReducer, on } from "@ngrx/store";
import { changerImageEnCours, bonneReponse, joueurSuivant, changerImage } from "./jeu.action";

export interface JeuState {
    images: string[];
    indexImageEnCours: number;
    indexJoueurEnCours: number;
    joueurs: Joueur[];
    joueurEnCours: Joueur
}

export interface Joueur {
    nom: string;
    score: number;
}

export const initialState: JeuState = {
    images: ['assets/img/image_1.jpg', 'assets/img/image_2.png', 'assets/img/image_3.jpg', 'assets/img/image_4.jpg'],
    indexImageEnCours: 2,
    indexJoueurEnCours: 0,
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
            imageEnCours: state.images[Math.floor(Math.random() * 4)]
        }
    }),
    on(joueurSuivant, (state) => {
        let indexJoueurSuivant: number;
        const indexJoueurEnCours = state.indexJoueurEnCours;
        if(indexJoueurEnCours + 1 > state.joueurs.length -1) {
            indexJoueurSuivant = 0;
        } else {
            indexJoueurSuivant = indexJoueurEnCours + 1;
        }

        return {
            ...state,
            indexJoueurEnCours: indexJoueurSuivant
        }
    }),
    on(bonneReponse, (state) => {
        return {
            ...state,
            joueurs: [
                ...state.joueurs.slice(0, state.indexJoueurEnCours),
                {
                    ...state.joueurs[state.indexJoueurEnCours],
                    score: state.joueurs[state.indexJoueurEnCours].score + 1
                },
                ...state.joueurs.slice(state.indexJoueurEnCours+1)
            ]
        }
    }),
    on(changerImage, (state) => {
        const newIndex =  Math.floor(Math.random() * state.images.length);
        console.log(newIndex);
        return {
            ...state,
            indexImageEnCours: newIndex
        }
    })
);

export function jeuReducer(state, action) {
    return _jeuReducer(state, action);
}