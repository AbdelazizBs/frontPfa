import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnnanceComponent } from './add-annance.component';

describe('AddAnnanceComponent', () => {
  let component: AddAnnanceComponent;
  let fixture: ComponentFixture<AddAnnanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAnnanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnnanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
