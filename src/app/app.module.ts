import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{ ProductsService} from './Services/products.service';

import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductViewerComponent } from './Components/product-viewer/product-viewer.component';
import { CotizarComponent } from './Components/cotizar/cotizar.component';
import { TarjetaCotizarComponent } from './Components/tarjeta-cotizar/tarjeta-cotizar.component';
import { ProductComponent } from './Components/product/product.component'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ProductListComponent,
    ProductViewerComponent,
    CotizarComponent,
    TarjetaCotizarComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
