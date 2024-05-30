import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { MaravillasColombiaPageComponent } from './pages/maravillas-colombia-page/maravillas-colombia-page.component';
import { DetalleSitioPageComponent } from './pages/detalle-sitio-page/detalle-sitio-page.component';

export const routes: Routes = [

  {
    path:'Maravillascolombia',
    component: MaravillasColombiaPageComponent
  },
  {
    path:'detallesitio',
    component: DetalleSitioPageComponent
  },
  {
    path:'**',
    redirectTo:'Maravillascolombia'
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class ModulesRoutingModule { }
