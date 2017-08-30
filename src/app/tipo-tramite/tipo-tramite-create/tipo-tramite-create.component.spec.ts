import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoTramiteCreateComponent } from './tipo-tramite-create.component';

describe('TipoTramiteCreateComponent', () => {
  let component: TipoTramiteCreateComponent;
  let fixture: ComponentFixture<TipoTramiteCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoTramiteCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoTramiteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
