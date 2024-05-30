import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesRoutingModule } from './module-routing.module';
import { MaravillasColombiaPageComponent } from './pages/maravillas-colombia-page/maravillas-colombia-page.component';
import { DetalleSitioPageComponent } from './pages/detalle-sitio-page/detalle-sitio-page.component';
import { FilterComponent } from './components/filter/filter.component';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MaravillasColombiaPageComponent,
    DetalleSitioPageComponent,
    FilterComponent,
    ListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ModulesModule { }
