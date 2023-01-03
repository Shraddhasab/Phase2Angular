import { formatNumber } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventService } from '../shared/events.service';

import { IEvent } from "./event";

@Component({
  selector: 'app-event-boot',
  templateUrl: './event-boot.component.html',
  styleUrls: ['./event-boot.component.css']
})
export class EventBootComponent implements OnInit {

  constructor(private eventService: EventService) { };

  eventList!: IEvent[] ;
  filteredList!:IEvent[];
subs!:Subscription;

  ngOnInit(): void {
    this.subs=this.eventService.getEvents().subscribe(

      (response:IEvent[]) => {

        this.eventList = (response);
        this.filteredList=response;    
        console.log((this.eventList));

      }
    );


    
  
  }

  event:IEvent={
    id:"100",
    name:'abc',
    date:"",
    time:"",
    price:200,
    imageUrl:"",
    location:{
      address:"abcc",
      city:"abccc",
      country:"india"
    },
    session:[]

  }


  // addData(){
  //   console.log(this.eventService.addEvent(this.event));
  //   this.eventList.push(this.event);
      
  // }

  showData(){

    this.subs=this.eventService.getEvents().subscribe(

      (response:IEvent[]) => {

        this.eventList = (response);
        this.filteredList=response;    
        console.log((this.eventList));

      }
    );

  }  

}
