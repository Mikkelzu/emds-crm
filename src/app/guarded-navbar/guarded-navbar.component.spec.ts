import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardedNavbarComponent } from './guarded-navbar.component';

describe('GuardedNavbarComponent', () => {
  let component: GuardedNavbarComponent;
  let fixture: ComponentFixture<GuardedNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardedNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardedNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
