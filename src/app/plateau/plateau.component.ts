import { Component, OnInit } from '@angular/core';
import { PartieService } from '../services/partie.service';

@Component({
  selector: 'app-plateau',
  templateUrl: './plateau.component.html',
  styleUrls: ['./plateau.component.scss']
})
export class PlateauComponent implements OnInit {

  public nombreJoueur: number;

  constructor(private partieService: PartieService) { }

  ngOnInit(): void {
    this.partieService.partie$.subscribe(partie => this.nombreJoueur = partie.nombreJoueurs);
  }

}
