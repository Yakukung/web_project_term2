import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { MatButtonModule } from '@angular/material/button';
import { UsersPostReq } from '../../../model/users.post.req';

@Component({
  selector: 'app-homepage',
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  imports: [CommonModule, NavbarComponent, MatButtonModule],
})
export class HomepageComponent implements OnInit {
  show: UsersPostReq[] = [];
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
                this.show = userSignInData;
                this.email = userSignInData[0].email;
                this.password = userSignInData[0].password;
                this.first_name = userSignInData[0].first_name;
                this.last_name= userSignInData[0].last_name;

                // ตัวอย่างการใช้ข้อมูลใน template
                console.log("Email:", this.email);
                console.log("Password:", this.password);
            }
        }
    });
  }

  vote() {
    this.router.navigate(['/vote']);
  }
}