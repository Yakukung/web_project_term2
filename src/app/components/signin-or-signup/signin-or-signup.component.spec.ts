import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninOrSignupComponent } from './signin-or-signup.component';
import { beforeEach, describe, it } from 'node:test';

describe('LoginOrSignupComponent', () => {
  let component: SigninOrSignupComponent;
  let fixture: ComponentFixture<SigninOrSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigninOrSignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SigninOrSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
