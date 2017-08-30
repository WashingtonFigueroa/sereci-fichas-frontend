import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionCategoriaComponent } from './asignacion-categoria.component';

describe('AsignacionCategoriaComponent', () => {
  let component: AsignacionCategoriaComponent;
  let fixture: ComponentFixture<AsignacionCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
