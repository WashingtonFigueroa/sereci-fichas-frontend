import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaTramiteCreateComponent } from './categoria-tramite-create.component';

describe('CategoriaTramiteCreateComponent', () => {
  let component: CategoriaTramiteCreateComponent;
  let fixture: ComponentFixture<CategoriaTramiteCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaTramiteCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaTramiteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
