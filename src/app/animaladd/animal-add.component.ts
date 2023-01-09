import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AnimalService } from 'shared/animal.service';
import { GenericValidator } from 'shared/genericvalidator';
import { IAnimal } from '../animal';

@Component({
  selector: 'app-animal-add',
  templateUrl: './animal-add.component.html',
  styleUrls: ['./animal-add.component.css']
})
export class AnimalAddComponent implements OnInit ,OnDestroy {
  pageTitle='Edit Animal';
  errorMessage='';

  addAnimal!: FormGroup;
  animal!:IAnimal | null;
  sub!:Subscription;
  displayMessage: {[key:string]:string}={};
    private validationMessages!:{[key:string]:{[key:string]:string}};

    private genericValidator!:GenericValidator;

    constructor(private formBuilder: FormBuilder,private router: Router, private animalService:AnimalService ) {

      this.validationMessages={

      name:{
        required:'animal name is required ',
        minLength:'animal name must have 3 characters',
        maxLength:'animal name must have less than  equal to 10 chars'
      },
      briefDescription:{
        required:'briefDescription is required'
      },
      imageUrl:{
        required:'Image is required'
      },
      age:{
        required:'Color is required'
      }


      };
      this.genericValidator=new GenericValidator(this.validationMessages);

   }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


  ngOnInit() {

    this.addAnimal = this.formBuilder.group({
      id: [],
      name: ['',[ Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
      description:['',[Validators.required]],
      imageUrl:['',[Validators.required]],
      age:[3,[Validators.required]]
    });

    //when the product is selected from the product list , it should be displayed on the form

    this.sub=this.animalService.selectedAnimalChanges$.subscribe(selAnimal=>this.displayAnimal(selAnimal));


    this.addAnimal.valueChanges.
    subscribe(()=>this.displayMessage=this.genericValidator.processMessages(this.addAnimal))
  }
  
  get id(){
    return this.addAnimal.get("id");
  }

  get name(){
    return this.addAnimal.get("name");
    }

    get description(){
      return this.addAnimal.get("briefDescription");
      }

  get imageUrl(){
    return this.addAnimal.get("imageUrl");
    }
 
  get age(){
    return this.addAnimal.get("age");
    }


  displayAnimal(animalParam:IAnimal |null):void{

   this.animal = animalParam;
   if(this.animal){
    this.addAnimal.reset();

    if(this.animal.id==0){
      this.pageTitle='Add Animal';
    }
    else{

      this.pageTitle=`Edit A: ${this.animal.name}`;

    }
 //update the data on the form
 this.addAnimal.patchValue({
  id:this.animal.id,
   name:this.animal.name,
   description:this.animal.description,
   image:this.animal.imageUrl,
   age:this.animal.age,
 })
   }
  }

  saveAnimal(originalAnimal:IAnimal):void{
   console.log(originalAnimal)
    if(this.addAnimal.valid){
      if(this.addAnimal.dirty){
        const animal={...originalAnimal,...this.addAnimal.value};

      if(animal.id==0){
        console.log(animal.id)
        this.animalService.createAnimal(animal).subscribe(
          (resp)=>{
            this.animalService.changeSelectedAnimal(resp);
            console.log('AnimalAdd save animal method '+ resp);},

          (err)=> {this.errorMessage=err;
            console.log('AnimalAdd save animal method '+err);
          }

        );

     }
     else{
      console.log(animal.id)
      this.animalService.updateAnimal(animal).subscribe(
       resp=>this.animalService.changeSelectedAnimal(resp),
       err=>this.errorMessage=err      );

     }
      }

      this.router.navigate(['animals'])
    }

  }

  blur():void{
  this.displayMessage=this.genericValidator.processMessages(this.addAnimal);

  }

  deleteAnimal(animal:IAnimal):void{
    if(animal && animal.id){

      if(confirm(`Are you sure you want to delete ${animal.name} details`)){

        this.animalService.deleteAnimal(animal.id).subscribe(
          resp=>this.animalService.changeSelectedAnimal(null),
          err=>this.errorMessage=err
        );
      }
      else{
        this.animalService.changeSelectedAnimal(null)
      }
    }

  }
}
