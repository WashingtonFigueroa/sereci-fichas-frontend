import { Component, OnInit } from '@angular/core';
import {VideoUploadService} from '../video-upload.service';

@Component({
  selector: 'app-video-upload-index',
  templateUrl: './video-upload-index.component.html',
  styleUrls: ['./video-upload-index.component.css']
})
export class VideoUploadIndexComponent implements OnInit {
    videos: any;
    loading = false;
    constructor(private videoUploadService: VideoUploadService) {}

    ngOnInit() {
        this.videoUploadService.index()
            .subscribe(videos => {
                this.videos = videos;
                this.loading = true;
            });
    }
    onDelete(video){
        const index = this.videos.findIndex((video_uploadEl) => {
            return video_uploadEl.id === video.id;
        });
        this.videos.splice(index, 1);
    }
}
