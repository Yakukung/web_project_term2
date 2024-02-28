import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import {MatButtonModule} from '@angular/material/button';
@Component({
    selector: 'app-homepage',
    standalone: true,
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.scss',
    imports: [CommonModule, NavbarComponent, MatButtonModule]
})
export class HomepageComponent implements OnInit{
  constructor(private router: Router, private route: ActivatedRoute) {}

userName: string = '';
email: string = '';
password: string = '';

  ngOnInit() {
    // ดึงค่าจาก query parameters
    this.route.queryParams.subscribe((params) => {
      this.userName = params['userName'];
      this.email = params['email'];
      this.password = params['password'];
    });
  }
  vote() {
    this.router.navigate(['/vote']);
  }
}