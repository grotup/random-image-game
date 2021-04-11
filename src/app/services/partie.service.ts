import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PartieModel } from '../models/partie.model';

@Injectable({
  providedIn: 'root'
})
export class PartieService {

  private readonly _partie = new BehaviorSubject<PartieModel>(null);

  readonly partie$ = this._partie.asObservable();

  get partie(): PartieModel {
    return this._partie.getValue();
  }

  set partie(val: PartieModel) {
    this._partie.next(val);
  }

  set joueurs(nombreJoueurs: number) {
    this.partie = {
      nombreJoueurs
    };
  }
}
