import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionCategoriaIndexComponent } from './asignacion-categoria-index.component';

describe('AsignacionCategoriaIndexComponent', () => {
  let component: AsignacionCategoriaIndexComponent;
  let fixture: ComponentFixture<AsignacionCategoriaIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionCategoriaIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionCategoriaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
