import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipment } from 'src/app/shared/model';
import { DataService } from 'src/app/shared/service';
import { DialogService } from 'ngx-bootstrap-modal';
import { EquipmentDialogsComponent } from '../equipment-dialogs/equipment-dialogs.component';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.scss'],
})
export class EquipmentListComponent implements OnInit {
  public equipments: Equipment[] = [];

  constructor(
    private dataService: DataService,
    private router: Router,
    public dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.getAllEquipments();
  }

  getAllEquipments() {
    this.dataService
      .getEquipmentAll()
      .subscribe((res) => (this.equipments = res));
  }

  confirmDelete(i: number) {
    let id = this.equipments[i].id;
    this.dialogService
      .addDialog(EquipmentDialogsComponent, {
        title: '提示',
        message: '确定要删除嘛',
      })
      .subscribe((isconfirmed) => {
        if (isconfirmed) {
          this.deleteEquipment(id);
        } else {
          //...
        }
      });
  }

  deleteEquipment(id: string) {
    this.dataService.deleteEquipments(id);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([this.router.url]);
    });
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
