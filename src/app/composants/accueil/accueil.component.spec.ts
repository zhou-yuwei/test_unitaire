import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilComponent } from './accueil.component';
import {DebugElement} from "@angular/core";

describe('AccueilComponent', () => {
  let component: AccueilComponent;
  let fixture: ComponentFixture<AccueilComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('doit contenir IDP_2204',
    ()=>{
    let leTitre = debugElement.nativeElement.querySelector("#titre");
    //je récupère un element HTML par son ID
      expect(leTitre.textContent).toEqual('IDP_2204');
      expect(leTitre.textContent).not.toEqual('IDP2204');
    }
    )
});
