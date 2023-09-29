import { Component } from '@angular/core';
import { EventserviceService } from '../eventservice.service';
import { Router} from '@angular/router';
import { Events } from '../events';
import { BookingserviceService } from '../bookingservice.service';
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
model:any={};
data:any
events:Events[]=[];
user_id=localStorage.getItem('userid');
id:any;
constructor(private eventservice:EventserviceService,private bookingservice:BookingserviceService,private router:Router ){}
category=this.model.category || null;
findcategory() {
this.eventservice.geteventByCategory(this.model.category).subscribe(data => {
  this.events = data;
  console.log(this.events);
});
}
details(id:any){
  this.router.navigate(['/event-details',id]);
}

}
