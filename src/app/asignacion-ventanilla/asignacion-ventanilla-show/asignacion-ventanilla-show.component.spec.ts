import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionVentanillaShowComponent } from './asignacion-ventanilla-show.component';

describe('AsignacionVentanillaShowComponent', () => {
  let component: AsignacionVentanillaShowComponent;
  let fixture: ComponentFixture<AsignacionVentanillaShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionVentanillaShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionVentanillaShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
