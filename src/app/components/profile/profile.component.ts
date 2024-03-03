import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { MatButtonModule } from '@angular/material/button';
import { UsersPostReq } from '../../../model/users.post.req';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, NavbarComponent, MatButtonModule, HttpClientModule ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  email: string = '';
  password: string = '';
  first_name: string = '';
  last_name: string = '';
  user_id: string = '';
  constructor(private router: Router, private route: ActivatedRoute, private httpClient: HttpClient) {}
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const user_id = params['user_id'];

      if (user_id) {
        this.fetchUserData(user_id);
      }
    });
  }

  fetchUserData(user_id: string) {
    const url = `http://localhost:3000/facemash/navbar`;

    this.httpClient.post(url, { user_id }).subscribe(
      (response: any) => {
        this.email = response.email;
        this.password = response.password;
        this.first_name = response.first_name;
        this.last_name = response.last_name;
        this.user_id = response.user_id;

      },
      (error: any) => {
        console.error("Error fetching user data:", error);
      }
    );
  }
}
