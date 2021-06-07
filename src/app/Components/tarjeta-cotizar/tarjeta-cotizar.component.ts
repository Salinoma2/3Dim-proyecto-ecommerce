import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-cotizar',
  templateUrl: './tarjeta-cotizar.component.html',
  styleUrls: ['./tarjeta-cotizar.component.css']
})
export class TarjetaCotizarComponent implements OnInit {
  @Input() products: any;
  constructor() { }

  ngOnInit(): void {
  }

}
