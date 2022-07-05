import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipment } from 'src/app/shared/model';
import { DataService } from 'src/app/shared/service';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.scss'],
})
export class EquipmentListComponent implements OnInit {
  public equipments: Equipment[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.getAllEquipments();
  }

  getAllEquipments() {
    this.dataService
      .getEquipmentAll()
      .subscribe((res) => (this.equipments = res));
  }

  getEquipmentDetail(i: number) {
    let id = this.equipments[i].id;
  }

  reloadcreatePage() {
    let naviToUrl = this.router.url.replace(
      '/equipment-list',
      '/equipment-creation'
    );
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([naviToUrl]);
    });
  }

  reloadDetailedPage(i: number) {
    let id = this.equipments[i].id;
    let currentUrl = this.router.url;
    let naviToUrl = this.router.url.replace(
      '/equipment-list',
      '/equipment-detail'
    );
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([naviToUrl, id]);
    });
  }
}
