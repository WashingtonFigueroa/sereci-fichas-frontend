import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaItemComponent } from './ficha-item.component';

describe('FichaItemComponent', () => {
  let component: FichaItemComponent;
  let fixture: ComponentFixture<FichaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
