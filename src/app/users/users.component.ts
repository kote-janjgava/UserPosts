import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  // returns Data from Api
  users$: any = [];

  constructor(private data: MyServiceService) {}
  // Any code that is executed here will be executed when this component is used
  ngOnInit() {
    this.data.getUsers().subscribe((data: any) => (this.users$ = data));
  }
}
