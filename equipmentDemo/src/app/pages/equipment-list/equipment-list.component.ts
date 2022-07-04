import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.scss']
})
export class EquipmentListComponent implements OnInit {
  public messages: String[] = [];


  constructor() { }

  ngOnInit(): void {
  }
  deleteMessage(i: number) {
    this.messages.splice(i);
  }
}
