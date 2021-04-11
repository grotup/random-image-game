import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopinNouvellePartieComponent } from './popin-nouvelle-partie.component';

describe('PopinNouvellePartieComponent', () => {
  let component: PopinNouvellePartieComponent;
  let fixture: ComponentFixture<PopinNouvellePartieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopinNouvellePartieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopinNouvellePartieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
