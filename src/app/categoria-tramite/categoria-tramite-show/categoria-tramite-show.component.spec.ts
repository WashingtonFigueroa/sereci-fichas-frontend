import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaTramiteShowComponent } from './categoria-tramite-show.component';

describe('CategoriaTramiteShowComponent', () => {
  let component: CategoriaTramiteShowComponent;
  let fixture: ComponentFixture<CategoriaTramiteShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaTramiteShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaTramiteShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
