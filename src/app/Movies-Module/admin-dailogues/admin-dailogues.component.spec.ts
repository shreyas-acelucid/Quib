import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDailoguesComponent } from './admin-dailogues.component';

describe('AdminDailoguesComponent', () => {
  let component: AdminDailoguesComponent;
  let fixture: ComponentFixture<AdminDailoguesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDailoguesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDailoguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
