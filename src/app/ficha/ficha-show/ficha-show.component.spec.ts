import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaShowComponent } from './ficha-show.component';

describe('FichaShowComponent', () => {
  let component: FichaShowComponent;
  let fixture: ComponentFixture<FichaShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
