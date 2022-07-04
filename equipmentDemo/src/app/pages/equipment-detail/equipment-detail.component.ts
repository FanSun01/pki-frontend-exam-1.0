import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Equipment } from 'src/app/shared/model';

@Component({
  selector: 'app-equipment-detail',
  templateUrl: './equipment-detail.component.html',
  styleUrls: ['./equipment-detail.component.scss'],
})
export class EquipmentDetailComponent implements OnInit {
  equipmentForm: FormGroup = new FormGroup({
    id: new FormControl(),
    model: new FormControl(),
    brand: new FormControl(),
    weight: new FormControl(),
    manufactureDate: new FormControl(),
  });
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    let submit = new Equipment();
    submit.id = this.equipmentForm.get('id')?.value;
    submit.model = this.equipmentForm.get('model')?.value;
    submit.brand = this.equipmentForm.get('brand')?.value;
    submit.weight = this.equipmentForm.get('weight')?.value;
    submit.manufactureDate = this.equipmentForm.get('manufactureDate')?.value;
    console.log(submit);
  }
}
