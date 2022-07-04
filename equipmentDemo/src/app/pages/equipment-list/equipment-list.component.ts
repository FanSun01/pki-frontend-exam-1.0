import { Component, OnInit } from '@angular/core';
import { Equipment } from 'src/app/shared/model';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.scss'],
})
export class EquipmentListComponent implements OnInit {
  public equipments: Equipment[] = [];

  constructor() {}

  ngOnInit(): void {}
  deleteEquipments(i: number) {
    this.equipments.splice(i);
  }
}
