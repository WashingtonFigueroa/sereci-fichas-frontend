import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoTramiteIndexComponent } from './tipo-tramite-index.component';

describe('TipoTramiteIndexComponent', () => {
  let component: TipoTramiteIndexComponent;
  let fixture: ComponentFixture<TipoTramiteIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoTramiteIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoTramiteIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
