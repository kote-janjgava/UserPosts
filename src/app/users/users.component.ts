import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  // აბრუნებს Data-ს Api-დან
  users$: any = [];

  constructor(private data: MyServiceService) {}

  ngOnInit() {
    this.data.getUsers().subscribe((data: any) => (this.users$ = data));
  }
}
