import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionVentanillaIndexComponent } from './asignacion-ventanilla-index.component';

describe('AsignacionVentanillaIndexComponent', () => {
  let component: AsignacionVentanillaIndexComponent;
  let fixture: ComponentFixture<AsignacionVentanillaIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionVentanillaIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionVentanillaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
