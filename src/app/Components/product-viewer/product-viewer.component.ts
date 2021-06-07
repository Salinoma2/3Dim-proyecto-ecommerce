import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import{ProductsService} from '../../Services/products.service'
@Component({
  selector: 'app-product-viewer',
  templateUrl: './product-viewer.component.html',
  styleUrls: ['./product-viewer.component.css']
})
export class ProductViewerComponent implements OnInit, AfterViewInit {
  @Input() data:any;
  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {

  }
  addToCotizar(){
      this.productService.addToCotizar(this.data);
  }

}
