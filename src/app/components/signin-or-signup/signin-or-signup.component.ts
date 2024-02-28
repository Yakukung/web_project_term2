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

@Component({
  selector: 'app-login-or-signup',
  standalone: true,
  imports: [MatIconModule, MatInputModule, MatFormFieldModule, MatButtonModule, FormsModule,  HttpClientModule],
  templateUrl: './signin-or-signup.component.html',
  styleUrls: ['./signin-or-signup.component.scss'],
})
export class SigninOrSignupComponent {
  email: string = '';
  password: string = '';
  userName: string = '';

  constructor(private router: Router, private httpClient: HttpClient) {}

  async signIn() {
    console.log('Email: ' ,this.email);
    console.log('password ' ,this.password);
    const email = this.email;
    const password = this.password;
    this.router.navigate(['/homepage'], { queryParams: { userName: this.userName, email, password } });
    // try {
    //   const results = await query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);
    //   if (results.length > 0) {
    //     // พบข้อมูลผู้ใช้ในฐานข้อมูล
    //     const user = results[0];
    //     console.log({ success: true, user });
    //   } else {
    //     // ไม่พบข้อมูลผู้ใช้
    //     console.log({ success: false, message: 'Invalid email or password' });
    //   }

    //   this.httpClient.get<any>(`/api/login?email=${email}&password=${password}`)
    //     .subscribe(response => {
    //       if (response.success) {
    //         // เข้าสู่ระบบสำเร็จ
    //         const user = response.user;
    //         console.log('Login successful:', user);
    //         this.router.navigate(['/homepage'], { queryParams: { userName: this.userName, email, password } });
    //       } else {
    //         // เข้าสู่ระบบไม่สำเร็จ
    //         console.log('Login failed:', response.message);
    //         // ทำการ handle กรณีเข้าสู่ระบบไม่สำเร็จตามความต้องการ
    //       }
    //     });
    // } catch (error) {
    //   console.error(error);
    // }
  }

  signUp(): void {
    // ส่วนที่เหลือของฟังก์ชัน signUp
  }
}

// // ฟังก์ชัน query ที่ใช้ Promise
// const query = (sql: string, values?: any): Promise<any> => {
//   return new Promise((resolve, reject) => {
//     conn.query(sql, values, (error, results) => {
//       if (error) reject(error);
//       resolve(results);
//     });
//   });
// };