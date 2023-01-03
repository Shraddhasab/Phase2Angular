import { Injectable } from "@angular/core";

import { BehaviorSubject, catchError, map, Observable, tap, throwError } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";



@Injectable({
    providedIn:'root'
})
export class ProductService{
    constructor(private http:HttpClient){}

     private url:string='api/products';
     products:Product[]=[];


     private selectedProductSource=new BehaviorSubject<Product | null>(null);

     selectedProductChanges$=this.selectedProductSource.asObservable();

    getProduct():Observable<Product[]>{
      return this.http.get<Product[]>(`${this.url}`).pipe(
        tap(data=> {console.log(data);
          this.products=data;
        }),
        catchError(this.errorHandler)
      );
     
    }

    changeSelectedProduct(selecedProduct:Product | null):void{
      console.log(selecedProduct);
      this.selectedProductSource.next(selecedProduct);
    }


    errorHandler=(err:any)=>{
      let errorMessage:string;

      if(err.error instanceof ErrorEvent){
        errorMessage=`An error has occures ${err.error.message}`;
      }else{
        errorMessage=`Backend error code ${err.status} ${err.body.error}`;
      }

      console.log(err);
      return throwError(errorMessage);
    }



    newProduct():Product{
      return{
        id:0,
        name:'',
        category:Category.Kitchen,
        price:"",
        imageUrl:"",
        rating:0
      };
    }


    createProduct(product:Product):Observable<Product>{
      
     const headers= new HttpHeaders({'Content-Type':'application/json'});
 
    
       const newProduct={...product,id:null};
 
 
       
       return     this.http.post<Product>(this.url,newProduct,{headers})
       .pipe(
         tap(data=>{
 
          console.log('in create new product'+ JSON.stringify(data));
          
          this.products.push(data);
 
         },
         catchError(this.errorHandler)
         )
       )
   }
   
 
   deleteProduct(id:number):Observable<{}>{
     const headers= new HttpHeaders({'Content-Type':'application/json'});
 
   
     const url= `${this.url}/${id}`;
 
     return this.http.delete<Product>(url,{headers})
     .pipe(
       tap(data=>{
         console.log('deleted prd'+id);
        const foundIndex = this.products.findIndex(item=>item.id===id);
       
        if(foundIndex > -1)
        this.products.splice(foundIndex,1);
 
 
       },
       catchError(this.errorHandler))
 
 
     );
 
 
 
 
 
   }
 
 
 
    updateProduct(product:Product):Observable<Product>{
     const headers= new HttpHeaders({'Content-Type':'application/json'});
 
    
     const url= `${this.url}/${product.id}`;
 
  
     return this.http.put<Product>(url,product, {headers}).pipe(
 
     tap(()=>{console.log('update product'+product.id);
     const foundIndex =this.products.findIndex(item=>item.id === product.id);
     if(foundIndex > -1){
       this.products[foundIndex]=product;
         }
     }),
     map(()=>product),
     catchError(this.errorHandler)
     );

    }
 }

enum Category{
    Kitchen='kitchen',
    Electric='electric',
    HouseHold='houseHold'
  }
  interface Product{
    id:number;
    name:string;
    price:string;
    imageUrl:string;
    rating:number,
    category:Category;
  }
  

