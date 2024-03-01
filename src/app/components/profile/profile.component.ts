import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { MatButtonModule } from '@angular/material/button';
import { UsersPostReq } from '../../../model/users.post.req';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, NavbarComponent, MatButtonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  email: string = '';
  password: string = '';
  first_name: string = '';
  last_name: string = '';
  user_id: string = '';
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
        const userSignInDataString = params['user_signin_success'];

        if (userSignInDataString) {
            const userSignInData = JSON.parse(userSignInDataString);
            console.log("userSignInData parsed:", userSignInData);

            // ตรวจสอบข้อมูล
            if (userSignInData.length > 0) {
                this.email = userSignInData[0].email;
                this.password = userSignInData[0].password;
                this.first_name = userSignInData[0].first_name;
                this.last_name= userSignInData[0].last_name;
                this.user_id= userSignInData[0].user_id;


                // ตัวอย่างการใช้ข้อมูลใน template
                console.log("Email:", this.email);
                console.log("Password:", this.password);
            }
        }
    });
  }
}
