import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IEvent } from "../event-bootcamp/event";


@Injectable({
    providedIn:"root"
})
export class EventService{
  
    constructor(private http:HttpClient){};
    private url = "api/events";

    // private urlToAdd="api/events";

    // addEvent(event:IEvent):Observable<IEvent>{
    //     const headers=new HttpHeaders({'Content-Type':'application/json'});
    //     const newEvent={...event,id:null};
    //     console.log("sending data to add");
        
    //     return this.http.post<IEvent>(`${this.url}`,newEvent,{headers});
    // }

    getEvents():Observable<IEvent[]> {
        return this.http.get<IEvent[]>(this.url);
    }
}
