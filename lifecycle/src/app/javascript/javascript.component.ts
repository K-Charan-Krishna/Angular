import { Component, OnInit } from '@angular/core';
import {userservices } from '../services/user.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
  // providers:[Courceenroll]
})
export class JavascriptComponent implements OnInit {

  constructor(private enrollservice:userservices) { }

  tittle="Javascript"

  ngOnInit(): void {
  }

    onEnroll(){
      // this.enrollservice.enrollthis(this.tittle)
    }

}
