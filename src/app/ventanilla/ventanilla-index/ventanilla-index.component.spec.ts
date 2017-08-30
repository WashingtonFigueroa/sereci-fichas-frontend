import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanillaIndexComponent } from './ventanilla-index.component';

describe('VentanillaIndexComponent', () => {
  let component: VentanillaIndexComponent;
  let fixture: ComponentFixture<VentanillaIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentanillaIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanillaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
