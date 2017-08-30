import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasIndexComponent } from './noticias-index.component';

describe('NoticiasIndexComponent', () => {
  let component: NoticiasIndexComponent;
  let fixture: ComponentFixture<NoticiasIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiasIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
