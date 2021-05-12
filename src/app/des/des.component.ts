import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changerImageEnCours } from '../state/jeu.action';

@Component({
  selector: 'app-des',
  templateUrl: './des.component.html',
  styleUrls: ['./des.component.scss']
})
export class DesComponent implements OnInit {

  constructor(private store: Store<{randomImage: number}>) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.store.dispatch(changerImageEnCours());
  }

}
