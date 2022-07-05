import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnsaveGuard } from './guards/unsave.guard';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { EquipmentCreationComponent } from './pages/equipment-creation/equipment-creation.component';
import { EquipmentDetailComponent } from './pages/equipment-detail/equipment-detail.component';
import { EquipmentDialogsComponent } from './pages/equipment-dialogs/equipment-dialogs.component';
import { EquipmentListComponent } from './pages/equipment-list/equipment-list.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'equipment-creation',
    component: EquipmentCreationComponent,
    canDeactivate: [UnsaveGuard],
  },
  {
    path: 'equipment-detail/:id',
    component: EquipmentDetailComponent,
  },
  {
    path: 'equipment-dialogs',
    component: EquipmentDialogsComponent,
  },
  {
    path: 'equipment-list',
    component: EquipmentListComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
