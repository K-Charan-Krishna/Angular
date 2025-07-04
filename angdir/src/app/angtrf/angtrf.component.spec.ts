import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngtrfComponent } from './angtrf.component';

describe('AngtrfComponent', () => {
  let component: AngtrfComponent;
  let fixture: ComponentFixture<AngtrfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngtrfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngtrfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
