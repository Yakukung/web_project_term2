// signin-or-signup.component.ts
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { conn } from "../../api/dbconnect";
import { users } from '../../api/user';
import axios from 'axios';

@Component({
  selector: 'app-login-or-signup',
  standalone: true,
  imports: [MatIconModule, MatInputModule, MatFormFieldModule, MatButtonModule, FormsModule, HttpClientModule],
  templateUrl: './signin-or-signup.component.html',
  styleUrls: ['./signin-or-signup.component.scss'],
})
export class SigninOrSignupComponent {
signUp() {
throw new Error('Method not implemented.');
}
  email: string = '';
  password: string = '';
  userName: string = '';

  constructor(private router: Router, private httpClient: HttpClient) {}

  show: users[] = [];

  // ปรับแก้เมธอด getSignIn เพื่อให้ใช้ HTTP POST
async getSignIn(email: string, password: string) {
  const HOST: string = "http://localhost:3000";
  const url = `${HOST}/trip/signin`;

  const data = {
    email: email,
    password: password
  };

  try {
    const response = await axios.post(url, data);
    const user_signin_success: users[] = response.data;

    console.log("Response from API:", user_signin_success);

    if (user_signin_success.length > 0) {
      console.log("Valid response from API");

      const userType = user_signin_success[0].user_type;

      if (userType === 'user') {
        this.router.navigate(['/homepage'], { queryParams: { user_signin_success: JSON.stringify(user_signin_success)} });
      } else if (userType === 'admin') {
        this.router.navigate(['/admin-homepage'], {  queryParams: { user_signin_success: JSON.stringify(user_signin_success) }});
      } else {
        console.log("Invalid user type");
      }
    } else {
      console.log("Invalid email or password");
    }

    return user_signin_success;
  } catch (error) {
    console.error("Error during sign-in:", error);
    throw error; 
  }
}
}