import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts$: any = [];

  constructor(private data: MyServiceService) {}

  ngOnInit() {
    this.data.getPosts().subscribe((data) => (this.posts$ = data));
  }
}
