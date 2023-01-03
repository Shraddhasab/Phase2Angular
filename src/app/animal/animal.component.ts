import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent {
  imageHeight=50;
  imageWidth=50;
  showImage=false;
  matchId:string='';
  

  setValue(){
    this.matchId='';
  }
  
  toggleImage(){
    this.showImage=!this.showImage;
  }

  

  list:any=[
    {id:'101',
      name:"Dog",
      briefDescription:"Most Loved Animal",
      imageUrl:"../../assets/download.jpeg"
},
{
  id:"102",
  name:"Lion",
  briefDescription:"Jungle King",
  imageUrl:"../../assets/images.jpg"
},
{
  id:"103",
  name:"Elephant",
  briefDescription:"The only animal who can't jump",
  imageUrl:"../../assets/images.jpg"
}
  ]


  filteredList:any[]=this.list;

  
  filter(){
    this.filteredList=[];
    for(let i=0;i<this.list.length;i++){
      if(this.list[i].id.includes(this.matchId)){
        this.filteredList.push(this.list[i]);
      }
    }
  }

}
