import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaCreateComponent } from './ficha-create.component';

describe('FichaCreateComponent', () => {
  let component: FichaCreateComponent;
  let fixture: ComponentFixture<FichaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
