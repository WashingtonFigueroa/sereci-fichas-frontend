import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionCategoriaCreateComponent } from './asignacion-categoria-create.component';

describe('AsignacionCategoriaCreateComponent', () => {
  let component: AsignacionCategoriaCreateComponent;
  let fixture: ComponentFixture<AsignacionCategoriaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionCategoriaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionCategoriaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
