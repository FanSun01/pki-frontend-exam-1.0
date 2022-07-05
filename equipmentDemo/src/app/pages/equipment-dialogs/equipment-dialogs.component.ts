import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'ngx-bootstrap-modal';

export interface ConfirmModel {
  title: string;
  message: string;
}

@Component({
  selector: 'app-equipment-dialogs',
  templateUrl: './equipment-dialogs.component.html',
  styleUrls: ['./equipment-dialogs.component.scss'],
})
export class EquipmentDialogsComponent
  extends DialogComponent<ConfirmModel, boolean>
  implements ConfirmModel
{
  title: string = '';
  message: string = '';
  constructor(dialogService: DialogService) {
    super(dialogService);
  }

  confirm() {
    this.close(true);
  }
  cancel() {
    this.close(false);
  }
}
