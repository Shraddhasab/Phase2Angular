import { Component } from '@angular/core';

@Component({
  selector: 'app-flag-list',
  templateUrl: './flag-list.component.html',
  styleUrls: ['./flag-list.component.css']
})
export class FlagListComponent {

  flats:any[]=[{
    flatNumber:101,
    aqreaInSqft:1000,
    numberOfZRooms:2,
    numberOfBalconies:1,
    monthlyRent:10000,
    imageUrl:"../../assets/image/flat101.jpg"
  },
  {
    flatNumber:102,
    aqreaInSqft:1500,
    numberOfZRooms:2,
    numberOfBalconies:1,
    monthlyRent:15000,
    imageUrl:"../../assets/image/flat102.jpg"
  }


]

  

}
