import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAnnanceComponent } from './all-annance.component';

describe('AllAnnanceComponent', () => {
  let component: AllAnnanceComponent;
  let fixture: ComponentFixture<AllAnnanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAnnanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAnnanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
