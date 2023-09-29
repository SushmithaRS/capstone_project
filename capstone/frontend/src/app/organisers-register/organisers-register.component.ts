import { Component } from '@angular/core';
import { Organisers } from '../organisers';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organisers-register',
  templateUrl: './organisers-register.component.html',
  styleUrls: ['./organisers-register.component.css']
})
export class OrganisersRegisterComponent {
  organisers:Organisers=new Organisers();
  constructor(private userservice:UserserviceService,private router:Router) {}
  onSubmit(){
   console.log(this.organisers);
   this.saveUser();
   }
 saveUser()
 {
 this.userservice.createOrganiser(this.organisers).subscribe(data=>{
   this.goToUserList(); 
 },error=>console.log(error));
 }
 goToUserList(){
   this.router.navigate(['/organisers-login']);
   }
}
