import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Department } from '../../interfaces/department.interface';
import { TouristicAttraction } from '../../interfaces/touristic-attraction.interface';
import { TourGuideService } from '../../services/tour-guide.service';
import { Subscription } from 'rxjs';
import { CitiesService } from '../../services/cities.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit, OnDestroy{

  constructor(private tourGuideService:TourGuideService, private CitiesService:CitiesService){}

  touristicAttractionsList:TouristicAttraction[] =[];
  touristicAttractions$:Subscription = new Subscription();

  ngOnInit(): void {
    this.getListTouristicAttractionsList();
    this.subscribeChangesTouristicList();

  }

  ngOnDestroy(): void {
      if(this.touristicAttractions$) this.touristicAttractions$.unsubscribe();
  }

  getListTouristicAttractionsList(){
      this.touristicAttractions$ = this.tourGuideService.findTouristicAttractionsList().subscribe({
        next: (tours: TouristicAttraction[])=>{
          this.touristicAttractionsList = tours;
          this.tourGuideService.setTouristicAttractionsList(this.touristicAttractionsList);
        },
        error: ()=>{
          console.log("Ocurrió un error al consultar los sitios turisticos");
        }
      });
  }

  subscribeChangesTouristicList(){
    this.tourGuideService.touristicAttractionCopy$.subscribe({
      next: (list:TouristicAttraction[])=>{
        console.log("NuevaLista => ",list);
        this.touristicAttractionsList = list;
      }
    })
  }



}
