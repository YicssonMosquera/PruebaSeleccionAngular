import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JmenosrentadosedadComponent } from './jmenosrentadosedad.component';

describe('JmenosrentadosedadComponent', () => {
  let component: JmenosrentadosedadComponent;
  let fixture: ComponentFixture<JmenosrentadosedadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JmenosrentadosedadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JmenosrentadosedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
