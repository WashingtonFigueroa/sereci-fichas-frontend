import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloShowComponent } from './articulo-show.component';

describe('ArticuloShowComponent', () => {
  let component: ArticuloShowComponent;
  let fixture: ComponentFixture<ArticuloShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticuloShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
