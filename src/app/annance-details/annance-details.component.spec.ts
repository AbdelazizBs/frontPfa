import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnanceDetailsComponent } from './annance-details.component';

describe('AnnanceDetailsComponent', () => {
  let component: AnnanceDetailsComponent;
  let fixture: ComponentFixture<AnnanceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnanceDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnanceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
