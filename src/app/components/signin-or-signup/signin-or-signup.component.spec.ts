import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOrSignupComponent } from './signin-or-signup.component';

describe('LoginOrSignupComponent', () => {
  let component: LoginOrSignupComponent;
  let fixture: ComponentFixture<LoginOrSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginOrSignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginOrSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
