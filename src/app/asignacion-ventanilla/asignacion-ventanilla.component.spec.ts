import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionVentanillaComponent } from './asignacion-ventanilla.component';

describe('AsignacionVentanillaComponent', () => {
  let component: AsignacionVentanillaComponent;
  let fixture: ComponentFixture<AsignacionVentanillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionVentanillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionVentanillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
