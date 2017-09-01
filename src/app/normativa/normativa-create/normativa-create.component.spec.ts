import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormativaCreateComponent } from './normativa-create.component';

describe('NormativaCreateComponent', () => {
  let component: NormativaCreateComponent;
  let fixture: ComponentFixture<NormativaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormativaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormativaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
