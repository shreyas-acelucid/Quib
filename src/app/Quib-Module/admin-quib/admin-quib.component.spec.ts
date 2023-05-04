import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminQuibComponent } from './admin-quib.component';

describe('OrdersComponent', () => {
  let component: AdminQuibComponent;
  let fixture: ComponentFixture<AdminQuibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminQuibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminQuibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
