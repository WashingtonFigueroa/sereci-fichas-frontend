import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
    selector: 'app-mensaje-dialog',
    templateUrl: './mensaje-dialog.component.html',
    styleUrls: ['./mensaje-dialog.component.css']
})
export class MensajeDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<MensajeDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
