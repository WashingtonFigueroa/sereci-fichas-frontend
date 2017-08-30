import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaTramiteComponent } from './categoria-tramite.component';

describe('CategoriaTramiteComponent', () => {
  let component: CategoriaTramiteComponent;
  let fixture: ComponentFixture<CategoriaTramiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaTramiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaTramiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
