import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaTramiteIndexComponent } from './categoria-tramite-index.component';

describe('CategoriaTramiteIndexComponent', () => {
  let component: CategoriaTramiteIndexComponent;
  let fixture: ComponentFixture<CategoriaTramiteIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaTramiteIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaTramiteIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
