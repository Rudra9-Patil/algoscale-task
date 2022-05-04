import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  loginFormVal:any=[]
  constructor() { }

  loginForm= new FormGroup(
    {
email: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]),
password:new FormControl('',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
username:new FormControl('',[Validators.required]),
fullname:new FormControl('',[Validators.required]),
gender:new FormControl('',[Validators.required]),

    }
  )

  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
    
  }
  get username(){
    return this.loginForm.get('username')
    
  }
  get fullname(){
    return this.loginForm.get('fullname')
    
  }
  get gender(){
    return this.loginForm.get('gender')
    
  }


 
  ngOnInit(): void {


  }

  onSubmit(){
      console.log(this.loginForm.value);
      this.loginFormVal.push(this.loginForm.value);

  }

}
