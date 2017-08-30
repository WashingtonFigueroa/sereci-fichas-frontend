import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaShowComponent } from './categoria-show.component';

describe('CategoriaShowComponent', () => {
  let component: CategoriaShowComponent;
  let fixture: ComponentFixture<CategoriaShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
