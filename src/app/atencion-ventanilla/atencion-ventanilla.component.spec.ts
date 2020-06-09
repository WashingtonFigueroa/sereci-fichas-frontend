import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtencionVentanillaComponent } from './atencion-ventanilla.component';

describe('AtencionVentanillaComponent', () => {
  let component: AtencionVentanillaComponent;
  let fixture: ComponentFixture<AtencionVentanillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtencionVentanillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtencionVentanillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
