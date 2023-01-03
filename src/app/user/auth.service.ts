import { Injectable } from "@angular/core";
import { User } from "./user"

@Injectable({
    providedIn:'root'
})

export class AuthService{

    currentUser!:User |null;
    redirectToUrl!:string;

    constructor(){}


    isLoggedIn():boolean{
        return !!this.currentUser;
    }

    login(username:string,password:string):void{
        this.currentUser={
            id:2,
            userName:username,
            isAdmin:true
        }


    }

    logOut(){
        this.currentUser=null;
    }


}
