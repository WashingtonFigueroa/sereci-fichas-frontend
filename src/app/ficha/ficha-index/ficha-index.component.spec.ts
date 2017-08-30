import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaIndexComponent } from './ficha-index.component';

describe('FichaIndexComponent', () => {
  let component: FichaIndexComponent;
  let fixture: ComponentFixture<FichaIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
