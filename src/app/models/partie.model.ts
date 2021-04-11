export interface PartieModel {
    nombreJoueurs: number;
    joueurs?: Joueur[];
}

export interface Joueur {
    nom: string;
}