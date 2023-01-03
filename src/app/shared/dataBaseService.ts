import { Injectable } from "@angular/core";
import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api';
import { Observable } from "rxjs";
import { IEvent } from "../event-bootcamp/event";


@Injectable({
    providedIn:'root'
})
export class DBServie implements InMemoryDbService {

    createDb() {
        

let products=[
    {
      "id":1,
      "name":"Gas Stove",
      "price":"4000",
      "imageUrl":"../../assets/gasStove.webp",
      "rating":4,
      "category":"Category.Kitchen"
      }
       ,{
      "id":2,
      "name":"Samsung Guru",
      "price":"4000",
      "imageUrl":"../../assets/samsungGuru.avif",
      "rating":3,
      "category":"Category.Electric"
    }
     ,{
      "id":3,
      "name":"Nokia 1100",
      "price":"3200",
      "imageUrl":"../../assets/nokia1100.jpeg",
      "rating":2,
      "category":"Category.Electric"
    }
    ,{
      "id":4,
      "name":"Mop",
      "price":"1500",
      "imageUrl":"../../assets/mop.webp",
      "rating":5,
      "category":"Category.Electric"
    }
     ,{
      "id":5,
      "name":"Chimney",
      "price":"40000",
      "imageUrl":"../../assets/chimney.jpeg",
      "rating":3.5,
      "category":"Category.Kitchen"
    }
  ]

return {products};
       
    }


}
