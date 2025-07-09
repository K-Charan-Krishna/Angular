import { Component, OnInit } from '@angular/core';
import {userservices } from '../services/user.service';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css'],
  // providers:[Courceenroll]
})
export class ReactComponent implements OnInit {
   tittle="React"
  constructor(private enrollservices:userservices) { }

  ngOnInit(): void {
  }
  onEnroll(){
    // this.enrollservices.enrollthis(this.tittle)
  }

}
