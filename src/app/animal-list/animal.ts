/* export interface IAnimal{
    id:number;
    name:string;
    description:string;
    age:number;
    imageUrl:string;
}
 */

/* import { Injectable } from "@angular/core";
export class IAnimal{
    id:number=0;
    name:string='';
    description:string='';
    age:number=0;
    imageUrl:string='';
    constructor(id:number, name:string, description:string, age:number, imageUrl:string){
        this.id=id;
        this.name=name;
        this.description=description;
        this.age=age;
        this.imageUrl=imageUrl;
    }
}
@Injectable({
    providedIn: 'root'
})
export class AnimalService{
    public getAnimals(){
        let animals:IAnimal[];
        animals=[
            new IAnimal(101,'cat','meow meow',2,'../../assets/cat.jpeg'),
            new IAnimal(102, 'dog','baww baww',4,'../../assets/dog.jpg'),
            new IAnimal(103,'tiger','I am Tiger',7,'../../assets/tiger.jpg'),
            new IAnimal(104,'rabbit','I am Rabbit',2,'../../assets/rabbit.jpg')
        ]
        return animals;
    }
    getAnimalById(id:number){
        let animals:IAnimal[]=this.getAnimals();
        return animals.find(a=>a.id==id);
    }
} */


export interface IAnimal{
  id:number;
  name:string;
  description:string;
  age:number;
  imageUrl:string;
  }
