import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoTramiteShowComponent } from './tipo-tramite-show.component';

describe('TipoTramiteShowComponent', () => {
  let component: TipoTramiteShowComponent;
  let fixture: ComponentFixture<TipoTramiteShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoTramiteShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoTramiteShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
