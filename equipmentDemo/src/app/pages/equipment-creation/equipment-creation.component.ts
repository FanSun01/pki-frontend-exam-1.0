import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CanComponentLeave } from 'src/app/guards/unsave.guard';
import { Equipment } from 'src/app/shared/model';
import { DataService } from 'src/app/shared/service';

@Component({
  selector: 'app-equipment-creation',
  templateUrl: './equipment-creation.component.html',
  styleUrls: ['./equipment-creation.component.scss'],
})
export class EquipmentCreationComponent implements OnInit, CanComponentLeave {
  equipmentForm: FormGroup = new FormGroup({
    id: new FormControl(),
    model: new FormControl(),
    brand: new FormControl(),
    weight: new FormControl(),
    manufactureDate: new FormControl(),
  });

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.equipmentForm.get('id')?.disable();
  }

  onSubmit() {
    let submit = new Equipment();
    submit.id = this.equipmentForm.get('id')?.value;
    submit.model = this.equipmentForm.get('model')?.value;
    submit.brand = this.equipmentForm.get('brand')?.value;
    submit.weight = this.equipmentForm.get('weight')?.value;
    submit.manufactureDate = this.equipmentForm.get('manufactureDate')?.value;
    this.dataService.postEquipments(submit);
    console.log(submit);
  }

  canLeave(): boolean {
    if (this.equipmentForm.dirty) {
      if (window.confirm('确定要离开吗？')) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }
}
