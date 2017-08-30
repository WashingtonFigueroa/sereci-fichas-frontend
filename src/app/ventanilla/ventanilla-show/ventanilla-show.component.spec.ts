import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanillaShowComponent } from './ventanilla-show.component';

describe('VentanillaShowComponent', () => {
  let component: VentanillaShowComponent;
  let fixture: ComponentFixture<VentanillaShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentanillaShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanillaShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
