import {Component, Inject} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-mensaje-dialog',
  templateUrl: './mensaje-dialog.component.html',
  styleUrls: ['./mensaje-dialog.component.css']
})
export class MensajeDialogComponent {
    constructor(
        public dialogRef: MdDialogRef<MensajeDialogComponent>,
        @Inject(MD_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
