import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CanComponentLeave } from 'src/app/guards/unsave.guard';

@Component({
  selector: 'app-equipment-creation',
  templateUrl: './equipment-creation.component.html',
  styleUrls: ['./equipment-creation.component.scss'],
})
export class EquipmentCreationComponent implements OnInit, CanComponentLeave {
  myForm: FormGroup = new FormGroup({
    username: new FormControl(),
  });

  constructor() {}

  ngOnInit(): void {}

  canLeave(): boolean {
    if (this.myForm.dirty) {
      if (window.confirm('确定要离开吗？')) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }
}
