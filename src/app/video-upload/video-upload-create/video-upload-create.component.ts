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
                private videoUploadService: VideoUploadService) {
    }

    ngOnInit() {
        this.videoGroup = new FormGroup({
            'descripcion': new FormControl(null, [Validators.required]),
            'video': new FormControl(null),
        });
    }

    store() {
        let formData = new FormData();
        const fileBrowser = this.video.nativeElement;
        if (fileBrowser.files[0]) {
            formData.append('video', fileBrowser.files[0]);
            formData.append('descripcion', this.videoGroup.value.descripcion);
            this.uploading = true;
            this.videoUploadService.store(formData).subscribe(
                res => {
                    this.uploading = false;
                    this.videoGroup.reset();
                    console.log('ok');
                    alert('El video fue subido exitosamente');
                },
                error => {
                    this.uploading = false;
                },
                () => {
                    this.uploading = false;
                    console.log('ok complete');
                    console.log('the uploading has been completed');
                }
            )
        }

    }
}
