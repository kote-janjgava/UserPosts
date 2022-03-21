import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
})
export class InformationComponent implements OnInit {
  user$: any = [];

  //getting params from url
  constructor(private data: MyServiceService, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => (this.user$ = params.id));
  }

  // Any code that is executed here will be executed when this component is used
  ngOnInit() {
    this.data.getUser(this.user$).subscribe((data) => (this.user$ = data));
  }
}
