import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminScreenshotsComponent } from './admin-screenshots.component';

describe('AdminScreenshotsComponent', () => {
  let component: AdminScreenshotsComponent;
  let fixture: ComponentFixture<AdminScreenshotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminScreenshotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminScreenshotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
