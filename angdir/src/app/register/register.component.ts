import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   
  registerForm!:FormGroup
  name!:string
  email!:string
  password!:string
  Url:string='http://localhost:3000/register'
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.registerForm=new FormGroup({
      name:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      password: new FormControl('',Validators.required) 
    })
  }
  
  onSubmit(){
    const data={
      name:this.registerForm.get('name')?.value,
      email:this.registerForm.get('email')?.value, 
      password:this.registerForm.get('password')?.value
    }
    this.http.post(this.Url,data,{observe: 'response'}).subscribe(val=>{
      console.log(val)
    })

  }



}
