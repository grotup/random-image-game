import { ɵNullViewportScroller } from "@angular/common";
import { createReducer, on } from "@ngrx/store";
import { changerImageEnCours, bonneReponse, joueurSuivant, changerImage, augmenterScore, diminuerScore } from "./jeu.action";

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
    images: [
        'assets/img/image_1.png', 
        'assets/img/image_2.png', 
        'assets/img/image_3.png', 
        'assets/img/image_4.png', 
        'assets/img/image_5.png', 
        'assets/img/image_6.png', 
        'assets/img/image_7.png', 
        'assets/img/image_8.png', 
        'assets/img/image_9.png', 
        'assets/img/image_10.png',
        'assets/img/image_11.png', 
        'assets/img/image_12.png',  
        'assets/img/image_13.png', 
        'assets/img/image_14.png', 
        'assets/img/image_15.png', 
        'assets/img/image_16.png', 
        'assets/img/image_17.png', 
        'assets/img/image_18.png', 
        'assets/img/image_19.png', 
        'assets/img/image_20.png',],
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
            imageEnCours: state.images[Math.floor(Math.random() * state.images.length)]
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
    }),
    on(augmenterScore, (state, {joueur}) => {
        const indexJoueur = state.joueurs.findIndex(element => joueur.nom === element.nom)
        return {
            ...state,
            joueurs: [
                ...state.joueurs.slice(0, indexJoueur),
                {
                    ...state.joueurs[indexJoueur],
                    score: state.joueurs[indexJoueur].score + 1
                },
                ...state.joueurs.slice(indexJoueur+1)
            ]
        };
    }),
    on(diminuerScore, (state, {joueur}) => {
        const indexJoueur = state.joueurs.findIndex(element => joueur.nom === element.nom)
        return {
            ...state,
            joueurs: [
                ...state.joueurs.slice(0, indexJoueur),
                {
                    ...state.joueurs[indexJoueur],
                    score: state.joueurs[indexJoueur].score - 1
                },
                ...state.joueurs.slice(indexJoueur+1)
            ]
        };
    }),
    
);

export function jeuReducer(state, action) {
    return _jeuReducer(state, action);
}