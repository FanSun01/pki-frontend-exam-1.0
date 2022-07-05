import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Equipment } from './model';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private defaultServiceUrl: string;
  constructor(private http: HttpClient) {
    this.defaultServiceUrl = environment.baseurl;
  }
  getEquipmentAll(): Observable<Equipment[]> {
    return this.http.get<Equipment[]>(this.defaultServiceUrl + '/equipments/');
  }

  geteEquipmentById(id: string = ''): Observable<Equipment> {
    return this.http.get<Equipment>(
      this.defaultServiceUrl + '/equipments/' + id
    );
  }

  postEquipments(equip: Equipment) {
    return this.http.post<Equipment>(
      this.defaultServiceUrl + '/equipments',
      equip,
      { responseType: 'text' as any }
    );
  }

  deleteEquipments(id: string): Observable<void> {
    let res = this.http.delete<void>(
      this.defaultServiceUrl + '/equipments/' + id
    );
    return res;
  }

  patchEquipments(equip: Equipment): Observable<void> {
    let res = this.http.patch<void>(
      this.defaultServiceUrl + '/equipments/' + equip.id,
      equip
    );
    return res;
  }

  putEquipments(equip: Equipment): Observable<void> {
    let res = this.http.put<void>(
      this.defaultServiceUrl + '/equipments/' + equip.id,
      equip
    );
    return res;
  }

  /*
  GET /equipments
GET /equipments/asset:001
POST /equipments
PUT /equipments/asset:001
PATCH /equipments/asset:001
DELETE /equipments/asset:001
*/
}
