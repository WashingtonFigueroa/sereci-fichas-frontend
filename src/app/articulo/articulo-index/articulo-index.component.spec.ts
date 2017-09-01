import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloIndexComponent } from './articulo-index.component';

describe('ArticuloIndexComponent', () => {
  let component: ArticuloIndexComponent;
  let fixture: ComponentFixture<ArticuloIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticuloIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
