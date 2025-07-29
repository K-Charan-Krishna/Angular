import { Component, OnInit,Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {Products} from '../services/product.service'

interface LoginResponse {
  match: boolean;
  status:number;
  token:string;
  isAdmin: boolean | undefined;
}
@Injectable()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validateForm!:FormGroup
  Url:string='http://localhost:3000/Login'
  admin!:boolean | undefined;
  
  
  constructor(private http:HttpClient, 
    private router: Router,
    private cookies:CookieService,
    private product:Products){}

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
      // console.log(response.body.isAdmin)
      if(response.status===200){
        this.admin=response.body?.isAdmin
        this.product.doIsAdmin(this.admin)
        this.cookies.set('jwt',response.body?.token || "")
        this.router.navigate(['/'])
      }
    });
   }
}
