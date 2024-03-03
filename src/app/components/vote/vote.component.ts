import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { MatButtonModule } from '@angular/material/button';
import axios from 'axios';
import { PostPostReq } from '../../../model/posts.post.req';
@Component({
  selector: 'app-vote',
  standalone: true,
  imports: [CommonModule, NavbarComponent, MatButtonModule],
  templateUrl: './vote.component.html',
  styleUrl: './vote.component.scss'
})
export class VoteComponent implements OnInit {
  show: PostPostReq[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {}

  async ngOnInit() {
    const HOST: string = 'http://localhost:3000';
    const url = `${HOST}/facemash/vote`;
    
    try {
      const response = await axios.post(url);
      this.show = response.data;
      console.log(this.show);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}