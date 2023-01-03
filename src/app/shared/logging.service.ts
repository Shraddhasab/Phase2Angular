import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class LoggingServie{

    log(msg:any){
        console.log(msg);
    }

}
