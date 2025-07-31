import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-acess',
  templateUrl: './admin-acess.component.html',
  styleUrls: ['./admin-acess.component.css']
})
export class AdminAcessComponent implements OnInit {

  emailForm!: FormGroup;
  email!:string
  url: string = 'http://localhost:3000/adminaccess';
  
  constructor(private http:HttpClient) {

  }
  ngOnInit() {

    this.emailForm=new FormGroup({
      email:new FormControl('',Validators.required)
    })
    
  }

  onSubmit() {
  if (this.emailForm.valid) {
    this.email = this.emailForm.get('email')?.value;

    const data = { email: this.email };

    this.http.post(this.url, data).subscribe({
      next: (res) => {
        console.log('Email submitted:', res);
      },
      error: (err) => {
        console.error('Submission error:', err);
      }
    });
  } else {
    console.log('Form is invalid');
  }
  }

}
