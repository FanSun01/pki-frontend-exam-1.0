import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmModel } from 'src/app/shared/model';

@Component({
  selector: 'app-equipment-dialogs',
  templateUrl: './equipment-dialogs.component.html',
  styleUrls: ['./equipment-dialogs.component.scss'],
})
export class EquipmentDialogsComponent implements OnInit {
  description: string;

  constructor(
    private dialogRef: MatDialogRef<EquipmentDialogsComponent>,
    @Inject(MAT_DIALOG_DATA) data: ConfirmModel
  ) {
    this.description = data.description;
  }

  ngOnInit(): void {}

  save() {
    this.dialogRef.close(true);
  }

  close() {
    this.dialogRef.close();
  }
}
