import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getMatFormFieldDuplicatedHintError } from '@angular/material/form-field';
import {FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router :Router){

  }
  user_records:any[]=[];
  data={
    email:"",
    password:""
  }
  doLogin(Values:any){
  this.user_records=JSON.parse(localStorage.getItem("users")|| '{}');
  if(this.user_records.some((v)=>{
    return v.email==this.data.email && v.password == this.data.password
  })){
   alert("Login Succsessfull");

    this.router.navigate(['/showuser']);
  }
  else{
    alert("Login Failed");
  }

 }
}
