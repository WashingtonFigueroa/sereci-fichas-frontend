import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoUploadCreateComponent } from './video-upload-create.component';

describe('VideoUploadCreateComponent', () => {
  let component: VideoUploadCreateComponent;
  let fixture: ComponentFixture<VideoUploadCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoUploadCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoUploadCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
