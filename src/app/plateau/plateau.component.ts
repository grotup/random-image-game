import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Joueur } from '../models/partie.model';
import { PartieService } from '../services/partie.service';
import { augmenterScore, bonneReponse as bonneReponseAction, changerImage, diminuerScore, joueurSuivant } from '../state/jeu.action';
import { selectIndexJoueurEnCours, selectJoueurEnCours, selectJoueurs } from '../state/jeu.selectors';

@Component({
  selector: 'app-plateau',
  templateUrl: './plateau.component.html',
  styleUrls: ['./plateau.component.scss']
})
export class PlateauComponent implements OnInit {

  public nombreJoueur: number;

  public joueurEnCours$ = this.store.pipe(select(selectJoueurEnCours));
  public indexJoueurEnCours$ = this.store.pipe(select(selectIndexJoueurEnCours));
  public joueurs$ = this.store.pipe(select(selectJoueurs));

  displayedColumns: string[] = ['nom', 'score', 'actions'];

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  finirTour(bonneReponse: boolean): void {
    if(bonneReponse) {
      this.store.dispatch(bonneReponseAction());
    }
    this.store.dispatch(joueurSuivant())
    this.store.dispatch(changerImage())
    
  }

  ajouterPoint(joueur: Joueur) {
    this.store.dispatch(augmenterScore({joueur}))
  }
  
  retirerPoint(joueur: Joueur) {
    this.store.dispatch(diminuerScore({joueur}))
  }
}
