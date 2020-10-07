import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarclienteComponent } from './consultarcliente.component';

describe('ConsultarclienteComponent', () => {
  let component: ConsultarclienteComponent;
  let fixture: ComponentFixture<ConsultarclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
