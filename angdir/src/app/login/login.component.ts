import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

interface LoginResponse {
  match: boolean;
  status:number;
  token:string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validateForm!:FormGroup
  Url:string='http://localhost:3000/Login'
  
  constructor(private http:HttpClient, private router: Router, private cookies:CookieService){}

   ngOnInit(): void {
     this.validateForm=new FormGroup({
      email:new FormControl(null,Validators.required),
      password:new FormControl(null,Validators.required)
     })

   }
   
   onFormSubmit(){
    const userData={
      email: this.validateForm.get('email')?.value,
      password: this.validateForm.get('password')?.value,
    }


    this.http.post<LoginResponse>(this.Url, userData,{observe: 'response'}).subscribe(response => {
      console.log(response)
      console.log(response.status)
      if(response.status===200){
        this.cookies.set('jwt',response.body?.token || "")
        this.router.navigate(['/'])
      }
    });
   }
}
