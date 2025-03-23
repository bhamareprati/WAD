import { Component } from '@angular/core';

@Component({
  selector: 'app-showuser',
  standalone: false,
  templateUrl: './showuser.component.html',
  styleUrl: './showuser.component.css'
})
export class ShowuserComponent {
  user_records:any[]=[];
  data={
    name:"",
    id:"",
    contact:"",
    email:"",
    password:""
  }
  constructor(){
    this.user_records=JSON.parse(localStorage.getItem('users')||'{}');
  }

}
