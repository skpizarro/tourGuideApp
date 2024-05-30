import { CitiesService } from './../../services/cities.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Department } from '../../interfaces/department.interface';

@Component({
  selector: 'app-maravillas-colombia-page',
  templateUrl: './maravillas-colombia-page.component.html',
  styleUrl: './maravillas-colombia-page.component.css'
})
export class MaravillasColombiaPageComponent implements OnInit, OnDestroy{

  constructor(private citiesService:CitiesService){}

  departments$:Subscription = new Subscription();
  departmentList: Department[]=[];

  ngOnInit(): void {
    console.log("Se crea componente Maravillas");
    this.getDepartmentList();
  }
  ngOnDestroy(): void {
      console.log('Se destruye el componente Maravillas');
    if(this.departments$) this.departments$.unsubscribe();

  }

  getDepartmentList(){
    if(this.citiesService.getDepartmentList().length === 0){
      this.departments$ = this.citiesService.findDepartmentsList().subscribe({
        next: (departmentList: Department[])=>{
          this.departmentList = departmentList;
          this.citiesService.setDepartmentList(this.departmentList);
        },
        error: ()=>{
          console.log("Ocurrió un error al consultar los departamentos");
        }
      });
      return
    }
    this.departmentList = this.citiesService.getDepartmentList();
  }

}
