import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tipo=tramiteComponent } from './tipo=tramite.component';

describe('Tipo=tramiteComponent', () => {
  let component: Tipo=tramiteComponent;
  let fixture: ComponentFixture<Tipo=tramiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tipo=tramiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tipo=tramiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
