import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Equipment } from 'src/app/shared/model';
import { DataService } from 'src/app/shared/service';

@Component({
  selector: 'app-equipment-detail',
  templateUrl: './equipment-detail.component.html',
  styleUrls: ['./equipment-detail.component.scss'],
})
export class EquipmentDetailComponent implements OnInit {
  canEdit: boolean = false;
  equipmentForm: FormGroup = new FormGroup({
    id: new FormControl(),
    model: new FormControl(),
    brand: new FormControl(),
    weight: new FormControl(),
    manufactureDate: new FormControl(),
  });
  equipmentRes?: Equipment;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      this.dataService.geteEquipmentById(id).subscribe((res) => {
        this.equipmentForm.get('id')?.setValue(res.id);
        this.equipmentForm.get('model')?.setValue(res.model);
        this.equipmentForm.get('brand')?.setValue(res.brand);
        this.equipmentForm.get('weight')?.setValue(res.weight);
        this.equipmentForm
          .get('manufactureDate')
          ?.setValue(res.manufactureDate);
        this.equipmentRes = res;
      });
    });
  }

  saveEdit() {
    let req = new Equipment();
    req.brand = this.equipmentForm.get('brand')?.value;
    req.id = this.equipmentForm.get('id')?.value;
    req.model = this.equipmentForm.get('model')?.value;
    req.weight = this.equipmentForm.get('weight')?.value;
    req.manufactureDate = this.equipmentForm.get('manufactureDate')?.value;
    this.dataService.patchEquipments(req);
    this.canEdit = false;
  }

  enableEdit() {
    this.canEdit = true;
  }

  disableEdit() {
    this.canEdit = false;
    this.equipmentForm.get('id')?.setValue(this.equipmentRes?.id);
    this.equipmentForm.get('model')?.setValue(this.equipmentRes?.model);
    this.equipmentForm.get('brand')?.setValue(this.equipmentRes?.brand);
    this.equipmentForm.get('weight')?.setValue(this.equipmentRes?.weight);
    this.equipmentForm
      .get('manufactureDate')
      ?.setValue(this.equipmentRes?.manufactureDate);
  }
}
