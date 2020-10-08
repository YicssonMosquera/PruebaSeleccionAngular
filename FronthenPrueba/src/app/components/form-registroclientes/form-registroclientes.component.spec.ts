import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistroclientesComponent } from './form-registroclientes.component';

describe('FormRegistroclientesComponent', () => {
  let component: FormRegistroclientesComponent;
  let fixture: ComponentFixture<FormRegistroclientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRegistroclientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegistroclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
