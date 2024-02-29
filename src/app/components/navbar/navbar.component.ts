// navbar.component.ts
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatToolbarModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  email: string = '';
  password: string = '';
  first_name: string = '';
  last_name: string = '';
  user_id: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  usersigndata:any
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const userSignInDataString = params['user_signin_success'];

      // Log ค่าที่ได้จาก queryParams
      console.log("userSignInDataString from queryParams:", userSignInDataString);

      if (userSignInDataString) {
        const userSignInData = JSON.parse(userSignInDataString);
        console.log("userSignInData parsed:", userSignInData);
        this.usersigndata = userSignInData;
        // ตรวจสอบข้อมูล
        if (userSignInData.length > 0) {
          this.email = userSignInData.email;
          this.password = userSignInData.password;
          this.first_name = userSignInData[0].first_name;
          this.last_name = userSignInData[0].last_name;

        }
      }

    });
  }

  signup() {
    this.router.navigate(['/']);
  }
  profile() {
    this.router.navigate(['/profile'], { queryParams: { user_signin_success: JSON.stringify(this.usersigndata) } });
  }
  
  ranking() {
    this.router.navigate(['/ranking'], { queryParams: { user_signin_success: JSON.stringify(this.usersigndata) } });
  }
  
  vote() {
    this.router.navigate(['/vote'], { queryParams: { user_signin_success: JSON.stringify(this.usersigndata) } });
  }
  
  home() {
    this.router.navigate(['/homepage'], { queryParams: { user_signin_success: JSON.stringify(this.usersigndata) } });
  }
}