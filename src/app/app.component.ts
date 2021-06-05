import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Lightbox } from 'ngx-lightbox';
import { imageEnCours } from './state/jeu.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'random-image';

  public imageEnCours$ = this.store.pipe(select(imageEnCours));

  constructor(private store: Store) {
        

  }

  public open() {
    // this._lightbox.open()
  }
}
