import { Component } from '@angular/core';
import { getMatFormFieldDuplicatedHintError } from '@angular/material/form-field';
import {FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor( private router:Router){

  }
  ngOnInit():void{

  }

  user_records:any[]=[];
  data={
    name:"",
    id:"",
    contact:"",
    email:"",
    password:""
  }

  doRegistration(Values:any){
    // alert("Registration Done")
    this.user_records=JSON.parse(localStorage.getItem('users')||'{}');
    if(this.user_records.some((v)=>{
      return v.email == this.data.email
    })){
      alert("Duplictae Data");
    }
    else{
      this.user_records.push(this.data);
      localStorage.setItem("users",JSON.stringify(this.user_records));{
      alert("Hi "+this.data.name+" You Are Succsessfully Registered");
      this.router.navigate(['/login']);
      }
    }
  }

}
