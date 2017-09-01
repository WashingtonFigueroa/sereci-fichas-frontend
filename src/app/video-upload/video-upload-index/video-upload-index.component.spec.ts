import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoUploadIndexComponent } from './video-upload-index.component';

describe('VideoUploadIndexComponent', () => {
  let component: VideoUploadIndexComponent;
  let fixture: ComponentFixture<VideoUploadIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoUploadIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoUploadIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
