import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormativaShowComponent } from './normativa-show.component';

describe('NormativaShowComponent', () => {
  let component: NormativaShowComponent;
  let fixture: ComponentFixture<NormativaShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormativaShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormativaShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
