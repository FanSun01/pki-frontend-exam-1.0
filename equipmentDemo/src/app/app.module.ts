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
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LayoutComponent,
    EquipmentListComponent,
    EquipmentDetailComponent,
    EquipmentCreationComponent,
    EquipmentDialogsComponent,
    HomeComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EquipmentDialogsComponent],
})
export class AppModule {}
