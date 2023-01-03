import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductComponent } from '../Product/product.component';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit,OnChanges{
  ngOnInit(): void {
   
  }

  
  @Input() product1:Product={
    id:0,
    name:"",
    price:"",
    imageUrl:"",
    rating:0,
    category:Category.Kitchen
    }

  productList:ProductQuantity[]=[];


add(pro:Product){
  for(let i=0;i<this.productList.length;i++){

      

    if(this.productList[i].product==pro){
       this.productList[i].quantity++;
        
    }

  }

  
}

minus(pro:Product){
  for(let i=0;i<this.productList.length;i++){

      

    if(this.productList[i].product==pro){
       this.productList[i].quantity--;
       if(this.productList[i].quantity==0){
        this.productList.splice(i,1);
       }
        
    }

  }

  
}

  ngOnChanges(changes: SimpleChanges): void {

    // console.log(this.product1);

    if(this.product1.name=="")
        return;

    let found=false;
    for(let i=0;i<this.productList.length;i++){

      

      if(this.productList[i].product==this.product1){
        this.productList[i].quantity++;
          found=true;
      }

    }

    if(found==false){
      let pro:ProductQuantity={product:this.product1,quantity:1}
      this.productList.push(pro);
      
    }


  

    
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
  category:Category,

}
interface ProductQuantity{
  product:Product,
  quantity:number;
}
