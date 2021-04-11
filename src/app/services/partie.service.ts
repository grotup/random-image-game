import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { PartieModel } from '../models/partie.model';

@Injectable({
  providedIn: 'root'
})
export class PartieService {

  private _partie: PartieModel;

  private readonly _partieSubject = new Subject<PartieModel>();

  readonly partie$ = this._partieSubject.asObservable();

  get partie(): PartieModel {
    return this._partie
  }

  set partie(val: PartieModel) {
    this._partie = val;
    this._partieSubject.next(val);
  }

  set joueurs(nombreJoueurs: number) {
    this.partie = {
      nombreJoueurs
    };
  }
}
