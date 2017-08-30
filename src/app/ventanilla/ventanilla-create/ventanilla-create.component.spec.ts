import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanillaCreateComponent } from './ventanilla-create.component';

describe('VentanillaCreateComponent', () => {
  let component: VentanillaCreateComponent;
  let fixture: ComponentFixture<VentanillaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentanillaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanillaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
