import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteFrecuenteComponent } from './cliente-frecuente.component';

describe('ClienteFrecuenteComponent', () => {
  let component: ClienteFrecuenteComponent;
  let fixture: ComponentFixture<ClienteFrecuenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteFrecuenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteFrecuenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
