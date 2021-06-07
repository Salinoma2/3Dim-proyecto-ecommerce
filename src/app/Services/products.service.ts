import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Producto } from '../Model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API_URL="http://localhost:3000/api/productos";
  products: Producto[] = [];
  cotizar_items: Producto[] = [];
  constructor(private http:HttpClient) { 
    this.cotizar_items=[]
  }


  getProducts(){
    return this.http.get<Producto[]>(this.API_URL);
  }
  getCotizacion(){
    return this.cotizar_items = JSON.parse(localStorage.getItem('cotizacion') ||  '{}')
  }

  addToCotizar(item:Producto){
    item.qty_c =1
    
    if(localStorage.getItem('cotizacion') === null){
      this.cotizar_items?.push(item);
      localStorage.setItem('cotizacion', JSON.stringify(this.cotizar_items))
    }
    else if(this.isDuplicated(item.id)){
      this.cotizar_items = JSON.parse(localStorage.getItem('cotizacion') || '{}')
      this.cotizar_items[this.isDuplicatedId(item.id)].qty_c++;
      localStorage.setItem('cotizacion', JSON.stringify(this.cotizar_items))
    }

    else{
      
      this.cotizar_items?.push(item);
      localStorage.setItem('cotizacion', JSON.stringify(this.cotizar_items))
    }

 
    console.log(this.cotizar_items)
  }
  isDuplicated(id:any){
    for(var i=0; i<=this.cotizar_items?.length -1; i++){
      if(id === this.cotizar_items[i].id){ 
        return true;
      }
    }
    return false;
  }
  isDuplicatedId(id:any){
    for(var i=0; i<=this.cotizar_items?.length -1; i++){
      if(id === this.cotizar_items[i].id){ 
        return i;
      }
    }
    return 0;
  }
}
