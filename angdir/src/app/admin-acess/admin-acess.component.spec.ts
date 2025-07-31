import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAcessComponent } from './admin-acess.component';

describe('AdminAcessComponent', () => {
  let component: AdminAcessComponent;
  let fixture: ComponentFixture<AdminAcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
