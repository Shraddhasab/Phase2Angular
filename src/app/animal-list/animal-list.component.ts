/* import { Component, OnInit } from '@angular/core';
import { IAnimal } from './animal';
@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit{
  ngOnInit(): void {
    this.filteredAnimals = this.animals;
  }
  _animalAge:number=0;
  showImage:boolean=false;
  imageMargin:number=5;
  filteredAnimals:IAnimal[]=[];
  get animalAge():number{
    return  this._animalAge;
}
set animalAge(val:number){
 this._animalAge=val;
 console.log('in setter ',val);
 this.filteredAnimals=this.filterData(val);
 console.log('in setter',this.filteredAnimals);
}
   animals:any[]=[{
    id:101,
    name:'cat',
    description:'meow meow',
    age:2,
    imageUrl:'../../assets/cat.jpeg'
  },{
    id:102,
    name:'dog',
    description:'baww baww',
    age:4,
    imageUrl:'../../assets/dog.jpg'
  },{
    id:103,
    name:'tiger',
    description:'I am Tiger',
    age:7,
    imageUrl:'../../assets/tiger.jpg'
  },{
    id:104,
    name:'rabbit',
    description:'I am Rabbit',
    age:2,
    imageUrl:'../../assets/tiger.jpg'
  }]
 
  imageVisibility():void{
    this.showImage= !this.showImage;
  }
  filterData(val:number):IAnimal[]{
    val=this.animalAge;
    return this.animals.filter((animal:IAnimal)=>animal.age==val); 
  }
} */

/* import { Component, OnInit } from '@angular/core';
import { IAnimal, AnimalService } from './animal';
@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit{
  animals:IAnimal[]=[]
  constructor(private service:AnimalService){}
  ngOnInit(): void {
    this.animals=this.service.getAnimals();
  }
  _animalAge:number=0;
  showImage:boolean=false;
  imageMargin:number=5;
  get animalAge():number{
    return  this._animalAge;
}
set animalAge(val:number){
  this._animalAge=val;
  console.log('in setter ',val);
  this.animals=this.filterData(val);
  console.log('in setter',this.animals);
 }
 imageVisibility():void{
  this.showImage= !this.showImage;
}
filterData(val:number):IAnimal[]{
  val=this.animalAge;
  return this.animals.filter((animal:IAnimal)=>animal.age==val); 
}
} */




import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AnimalService } from 'shared/animal.service';
import { IAnimal } from './animal';


@Component({
  selector: 'animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit ,OnDestroy {
errorMessage:string='';
sub!:Subscription;
animal!:IAnimal;
animals:IAnimal[]=[];
pageTitle:string="Animal List "
filteredAnimals:IAnimal[]=[];
selectedAnimal!:IAnimal | null;
filterValue!:string;
href:string='';
dataReceived=this.animalService.getAnimals;

  constructor(private animalService:AnimalService,
    private router:Router){ }
  ngOnInit(): void {
    this.href=this.router.url;
    console.log(this.href);
       this.sub =this.animalService.getAnimals().subscribe(
         (response)=>{
         console.log(response);
         this.animals=response;
         this.filteredAnimals = this.animals;

       },
       err=>{this.errorMessage=err;
        console.log(err);
       }
       );

       this.animalService.selectedAnimalChanges$.
       subscribe(currentAnimal=>{this.selectedAnimal=currentAnimal;
       console.log(this.selectedAnimal);
       });
     }

     ngOnDestroy(): void {
       this.sub.unsubscribe();
  }

newAnimal():void{
  console.log('in new animal');

  this.animalService.changeSelectedAnimal(this.animalService.newAnimal());
  console.log('back to newAnimal from service ');

   this.router.navigate([this.href,'addAnimal']);
}
 animalSelected(animal:IAnimal):void{
  this.animalService.changeSelectedAnimal(animal);
 }
  getAnimalById(id:number):IAnimal{
    this.animalService.getAnimalById(id).subscribe(resp=>this.animal=resp);
    return this.animal;
  }
}
