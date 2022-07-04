import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentDialogsComponent } from './equipment-dialogs.component';

describe('EquipmentDialogsComponent', () => {
  let component: EquipmentDialogsComponent;
  let fixture: ComponentFixture<EquipmentDialogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentDialogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
