import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegorentadoComponent } from './juegorentado.component';

describe('JuegorentadoComponent', () => {
  let component: JuegorentadoComponent;
  let fixture: ComponentFixture<JuegorentadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegorentadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegorentadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
