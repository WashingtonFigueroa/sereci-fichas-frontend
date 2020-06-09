import {Component, OnInit} from '@angular/core';
import {VideoService} from './video.service';
import * as variables from '../const';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

    volume: number = 0.15;
    videos: any[];
    base: string = variables.videos;

    constructor(private videoService: VideoService) {
    }

    ngOnInit() {
        this.videoService.videoIds().subscribe(res => {
            this.videos = res;
        });
    }

}
