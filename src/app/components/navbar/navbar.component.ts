import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatToolbarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
signup() {
  this.router.navigate(['/']);
}
profile() {
  this.router.navigate(['/profile']);
}
ranking() {
  this.router.navigate(['/ranking']);
}
vote() {
  this.router.navigate(['/vote']);
}
home() {
  this.router.navigate(['/homepage']);
}
  constructor(private router: Router) {}
}
