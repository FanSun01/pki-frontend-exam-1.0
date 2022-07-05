import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipment } from 'src/app/shared/model';
import { DataService } from 'src/app/shared/service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
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
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllEquipments();
  }

  getAllEquipments() {
    this.dataService
      .getEquipmentAll()
      .subscribe((res) => (this.equipments = res));
  }

  deleteEquipmentDetail(i: number) {
    let id = this.equipments[i].id;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '400px';
    dialogConfig.width = '500px';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      title: 'Confirm',
      description: '真的要删除吗？',
    };
    const dialogRef = this.dialog.open(EquipmentDialogsComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((res) => {
      if (res == true) {
        this.dataService.deleteEquipments(id);
      }
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
