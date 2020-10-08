import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosRentadosComponent } from './juegos-rentados.component';

describe('JuegosRentadosComponent', () => {
  let component: JuegosRentadosComponent;
  let fixture: ComponentFixture<JuegosRentadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegosRentadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegosRentadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
