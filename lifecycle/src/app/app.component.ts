import { Component, ViewChild } from '@angular/core';
import { userservices } from './services/user.service';
import { FormControl, FormGroup, NgForm, NgModel, NgModelGroup, Validators,FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[userservices]
})
export class AppComponent {
  // userInput:string = '';
  // destroyv:boolean=true
  // @ViewChild('myform') form!:NgForm
  // @ViewChild('personalDetails') personalDetails!:NgModelGroup;
  // @ViewChild('email') emailDetails!:NgModel
  // defualtvalue='male'
  
  // first_name!:string;
  // last_name!:string;
  // email!:string;
  // gender!:string;
  // country!:string;

  reactiveform !: FormGroup

  hobbiesList=['reading','sports','gaming','traveling']


  constructor(private userservices:userservices) { 
    // console.log(this.users,'in cons')
  }
  // users:{name:string,status:string}[]=[]

  ngOnInit(){   
    // this.users=this.userservices.user
    // console.log(this.defualtvalue)
    this.reactiveform= new FormGroup({
      personaliDetails: new FormGroup({
      firstname : new FormControl(null,[Validators.required,this.handleingSpace]),
      lastname: new FormControl(null,Validators.required),
      email: new FormControl(null,[Validators.required,Validators.email]),
      }),
      country: new FormControl(null),
      gender: new FormControl(null,Validators.required),
      hobbies: new FormArray(this.hobbiesList.map(() => new FormControl(false))),
      skills: new FormArray([
        new FormControl(null,Validators.required)
      ])
    })

    // this.reactiveform.get('personaliDetails.firstname')!.valueChanges.subscribe((val)=>{
    //   console.log(val)
    // })
    // this.reactiveform.statusChanges.subscribe((val)=>{
    //   console.log(val)
    // })
   setTimeout(()=>{
      this.reactiveform.setValue({
        personaliDetails:{
          firstname:'charan',
          lastname:'krishna',
          email:'charan@233.com'
        },
      country:'india',
      gender:'male',
      hobbies:[],
      skills:[]
    })
   },2000)

  
  }
  // datafromChild(event:{name:string,status:string}){
  //     this.users=[...this.users,event]
  //     console.log(this.users)
  // }

get skillArray(): FormArray {
  return this.reactiveform.get('skills') as FormArray;
}

get hobbyArray(): FormArray {
  return this.reactiveform.get('hobbies') as FormArray;
}

onAddSkill(){
  (<FormArray>this.reactiveform.get('skills')).push(new FormControl(null,Validators.required))
}

handleingSpace(control:FormControl){
   if(control.value !==null && control.value.indexOf(' ')!=-1){
     return {handleingSpace:true}
   }
   else{
     return null
   }
}


  onSubmit(){
    // console.log(this.form)
    // console.log('from button')
    // this.first_name=this.form.value.personalDetails.firstname;
    // this.last_name=this.form.value.personalDetails.lastname;
    // this.email=this.form.value.personalDetails.email;
    // this.gender=this.form.value.gender
    // this.country=this.form.value.country
    console.log(this.reactiveform)
    // console.log(this.reactiveform.get('personaliDetails.email')?.valid)
    


  }
  // setdefultvalue(){
  // this.form.setValue({
  // country: "",
  // gender: "",
  // hobbies: "",
  // personalDetails: {
  //     email: "charan@123",
  //     first_name: "charan",
  //     last_name: "krishan",
  // }
  // });
  // this.form.form.patchValue({
  //     personalDetails: {
  //     email: "charan@123.com",
  //     firstname: "charan",
  //     lastname: "krishan",
  // }
  // })   
  

  // }
}
