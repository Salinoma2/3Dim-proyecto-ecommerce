import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../../Services/products.service'
@Component({
  selector: 'app-cotizar',
  templateUrl: './cotizar.component.html',
  styleUrls: ['./cotizar.component.css']
})
export class CotizarComponent implements OnInit {

  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
  }

}
