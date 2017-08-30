import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionVentanillaCreateComponent } from './asignacion-ventanilla-create.component';

describe('AsignacionVentanillaCreateComponent', () => {
  let component: AsignacionVentanillaCreateComponent;
  let fixture: ComponentFixture<AsignacionVentanillaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionVentanillaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionVentanillaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
