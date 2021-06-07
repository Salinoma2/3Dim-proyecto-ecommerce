import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from './Components/product-list/product-list.component';
import {ProductViewerComponent} from './Components/product-viewer/product-viewer.component';
import { CotizarComponent } from './Components/cotizar/cotizar.component';
import {HomePageComponent} from './Components/home-page/home-page.component';

const routes: Routes = [
  {path: 'viewer', component: ProductViewerComponent},
  {path: 'list', component: ProductListComponent},
  {path: 'cotizacion', component: CotizarComponent},
  {path: 'home', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
