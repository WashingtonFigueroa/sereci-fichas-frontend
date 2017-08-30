import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionCategoriaShowComponent } from './asignacion-categoria-show.component';

describe('AsignacionCategoriaShowComponent', () => {
  let component: AsignacionCategoriaShowComponent;
  let fixture: ComponentFixture<AsignacionCategoriaShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionCategoriaShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionCategoriaShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
