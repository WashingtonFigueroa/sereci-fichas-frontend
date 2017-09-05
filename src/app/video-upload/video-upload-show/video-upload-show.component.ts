import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {UsuarioService} from '../../usuario/usuario.service';
import {VideoUploadService} from '../video-upload.service';

@Component({
  selector: 'app-video-upload-show',
  templateUrl: './video-upload-show.component.html',
  styleUrls: ['./video-upload-show.component.css']
})
export class VideoUploadShowComponent implements OnInit {
    @Input() video:any;
    @Output() destroyVideo = new EventEmitter<any>();

    user: any;
    toggle = false;
    constructor(private usuarioService: UsuarioService, private videoUploadService: VideoUploadService) {}

    ngOnInit() {
      this.usuarioService.show(this.video.id).subscribe(res => {
          console.log('this is an example of videos');
          console.log(res);
          this.user = res.nombres + ' ' + res.apellidos;
      });
    }
    update(){
        this.videoUploadService.update(this.video).subscribe(res => {
            console.log(res);
            this.toggle = false;
        });
    }
    destroy(){
        this.videoUploadService.destroy(this.video.id).subscribe(res => {
            console.log(res);
            this.destroyVideo.emit(this.video);
        });
    }
}
