import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  pageTitle:string='Online Shopping';

  constructor(private router:Router,private authService:AuthService){}


  ngOnInit(): void {
   
  }
  

  get isLoggedIn():boolean{
    return this.authService.isLoggedIn();

  }

  get username():string|null{
    if(this.authService.currentUser)
    return this.authService.currentUser?.userName;

    return null;
  }


  logOut(){
    this.authService.logOut();
    this.router.navigate(['/home']);

  }




}
