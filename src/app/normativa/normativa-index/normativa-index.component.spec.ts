import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormativaIndexComponent } from './normativa-index.component';

describe('NormativaIndexComponent', () => {
  let component: NormativaIndexComponent;
  let fixture: ComponentFixture<NormativaIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormativaIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormativaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
