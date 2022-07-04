import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { EquipmentListComponent } from './pages/equipment-list/equipment-list.component';
import { EquipmentDetailComponent } from './pages/equipment-detail/equipment-detail.component';
import { EquipmentCreationComponent } from './pages/equipment-creation/equipment-creation.component';
import { EquipmentDialogsComponent } from './pages/equipment-dialogs/equipment-dialogs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LayoutComponent,
    EquipmentListComponent,
    EquipmentDetailComponent,
    EquipmentCreationComponent,
    EquipmentDialogsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
