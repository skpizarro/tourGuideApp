import { Component, Input, OnInit } from '@angular/core';
import { Department } from '../../interfaces/department.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CitiesService } from '../../services/cities.service';
import { City } from '../../interfaces/city.interface';
import { TourGuideService } from '../../services/tour-guide.service';
import { TouristicAttraction } from '../../interfaces/touristic-attraction.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private citiesService:CitiesService, private tourGuideService: TourGuideService){}

  form:FormGroup = this.formBuilder.group({});

  @Input()
  departmentList:Department[]=[];
  touristicList:TouristicAttraction[]=[];
  citiesList:City[]=[];


  ngOnInit(): void {
      console.log('Se crea componente filter');
      this.createForm();
  }

  createForm(){
    this.form = this.formBuilder.group({
      department:['',Validators.required],
      city:['',Validators.required],
      touristicAttraction: ['']
    })
  }

  onSelectedDepartment(){
    const {department} = this.form.value
    console.log("Depart => ",department);
    this.citiesService.findCitiesByIdDepartment(department).subscribe({
      next : (cities:City[])=>{
        this.citiesList = cities;
      },
      error: ()=>{
        console.log("error consultando la ciudades");
      }
    })
  }

  onSelectedCity(){

    const {department,city} = this.form.value
    console.log('Filtro de ciudad => ',city);
    this.touristicList = this.tourGuideService.getTouristicAttractionsList();
    console.log('Original => ',this.touristicList);
    const touresFiltered:TouristicAttraction[]= this.touristicList.filter(site => (site.city.id === city && site.city.departmentId === department));
    console.log('filtered => ',this.touristicList);
    this.tourGuideService.setTouristicAttractionsListCopy(touresFiltered);

  }


}
