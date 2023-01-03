import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GenericValidator } from '../shared/genericvalidator';
import { ProductService } from '../shared/product.service';
import { Category, Product } from './product.component';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit ,OnDestroy{

  // constructor(private productService:ProductService){}
  
  

  product:Product|null={
    id:0,
    name:"",
    price:"",
    imageUrl:"",
    rating:0,
    category:Category.Kitchen
  };

  pageTitle='Edit Product';
  errorMessage='';
  addProduct!: FormGroup;
  sub!:Subscription;

  displayMessage: {[key:string]:string}={};
  private validationMessages!:{[key:string]:{[key:string]:string}};
  private genericValidator!:GenericValidator;
  constructor(private formBuilder:FormBuilder,private router:Router,private productService:ProductService){

  this.validationMessages={

    name:{
      required:'Product name is required ',
      minLength:'Product name must have 3 characters',
      maxLength:'Product name must have less than  equal to 10 chars'
    },
    category:{
      required:'Category is required'
    },
    price:{
      required:'Price is required'
    },image:{
      required:'Image is required'
    },rating:{
      required:'Rating is required'
    },


    };




  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    
    this.addProduct=this.formBuilder.group({
      id: [],
      name: ['',[ Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      category:[Category.Kitchen,[Validators.required]],
      price:['',[Validators.required]],
      image:['',[Validators.required]],
      rating:[3,[Validators.required]]
    })

    this.sub=this.productService.selectedProductChanges$.subscribe(selProd=>this.displayProduct(selProd));
    this.addProduct.valueChanges.
    subscribe(()=>this.displayMessage=this.genericValidator.processMessages(this.addProduct));
  
  }

  get id(){
    return this.addProduct.get("id");
  }

  get name(){
    return this.addProduct.get("name");
    }

  get image(){
    return this.addProduct.get("image");
    }
  get price(){
    return this.addProduct.get("price");
      }
  get category(){
      return this.addProduct.get("category");
        }
  get rating(){
      return this.addProduct.get("rating");
        }



        displayProduct(productParam:Product |null):void{

          this.product = productParam;
          if(this.product){
       //reset the form to its original
           this.addProduct.reset();
       
           if(this.product.id==0){
             this.pageTitle='Add Product';
           }
           else{
       
             this.pageTitle=`Edit Product: ${this.product.name}`;
       
           }


 this.addProduct.patchValue({
  id:this.product.id,
   name:this.product.name,
   image:this.product.imageUrl,
   rating:this.product.rating,
   price:this.product.price,
   category:this.product.category


 })


   }

  }

  saveProduct(originalProduct:Product):void{

    if(this.addProduct.valid){
      if(this.addProduct.dirty){
        //copy over all of the orginal product properties
        //we arecopying data from teh addform
        //{...} it ensures that values are not lost ids are retained
        const product={...originalProduct,...this.addProduct.value};

      if(product.id===0){
        this.productService.createProduct(product).subscribe(
          (resp)=>this.productService.changeSelectedProduct(resp),
          (err)=>this.errorMessage=err
        );

     }
     else{

      this.productService.updateProduct(product).subscribe(
       resp=>this.productService.changeSelectedProduct(resp),
       err=>this.errorMessage=err      );

     }
      }


    }
    this.router.navigate(['products'])
  }










  blur():void{
    this.displayMessage=this.genericValidator.processMessages(this.addProduct);
  
    }
  
    deleteProduct(prod:Product):void{
      if(prod && prod.id){
  
        if(confirm(`Are you sure you want to delete ${prod.name} details`)){
  
          this.productService.deleteProduct(prod.id).subscribe(
            resp=>this.productService.changeSelectedProduct(null),
            err=>this.errorMessage=err
          );
        }
        else{
          //no need to delete the product
          this.productService.changeSelectedProduct(null)
        }
      }
  
    }




}
