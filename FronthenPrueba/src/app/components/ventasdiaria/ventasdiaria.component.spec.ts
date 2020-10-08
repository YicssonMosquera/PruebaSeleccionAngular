import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasdiariaComponent } from './ventasdiaria.component';

describe('VentasdiariaComponent', () => {
  let component: VentasdiariaComponent;
  let fixture: ComponentFixture<VentasdiariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasdiariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasdiariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
