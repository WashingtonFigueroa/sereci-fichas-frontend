import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {VideoUploadService} from '../video-upload.service';
import {UsuarioService} from '../../usuario/usuario.service';

@Component({
  selector: 'app-video-upload-create',
  templateUrl: './video-upload-create.component.html',
  styleUrls: ['./video-upload-create.component.css']
})
export class VideoUploadCreateComponent implements OnInit {

    videoGroup: FormGroup;
    uploading: boolean = false;
    @ViewChild('video') video;
    constructor(private usuarioService: UsuarioService,
                private videoUploadService: VideoUploadService) {}

    ngOnInit() {
        this.videoGroup = new FormGroup({
            'descripcion' : new FormControl(null, [Validators.required]),
            'video' : new FormControl(null, [Validators.required]),
        });
        console.log(this.videoGroup);
    }
    store(){
        let formData = new FormData();
        const fileBrowser = this.video.nativeElement;
        if(fileBrowser.files && fileBrowser.files[0]){
            formData.append('video', fileBrowser.files[0]);
            formData.append('descripcion', this.videoGroup.value.descripcion);
            console.log(formData);
            this.uploading = true;
            this.videoUploadService.store(formData).subscribe(
                res => console.log(res),
                error => console.log(error),
                () => {
                    this.uploading = false;
                    console.log('the uploading has been completed');
                }
            )
        }

    }
}
