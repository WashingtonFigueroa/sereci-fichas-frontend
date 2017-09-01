import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoUploadShowComponent } from './video-upload-show.component';

describe('VideoUploadShowComponent', () => {
  let component: VideoUploadShowComponent;
  let fixture: ComponentFixture<VideoUploadShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoUploadShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoUploadShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
