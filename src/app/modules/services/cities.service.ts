import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Department } from '../interfaces/department.interface';
import { environment } from '../../environment-dev';
import { City } from '../interfaces/city.interface';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  BASE_URL = environment.URL_BASE;
  constructor(private http: HttpClient) { }

  private departmentsListSubject:BehaviorSubject<Department[]> = new BehaviorSubject([] as Department[]);
  departmentsList$ = this.departmentsListSubject.asObservable();


  getDepartmentList():Department[]{
    return this.departmentsListSubject.getValue();
  }

  setDepartmentList(newDeparmentList:Department[]):void{
    this.departmentsListSubject.next(newDeparmentList);
  }

  findDepartmentsList():Observable<Department[]>{
    const uri = `${this.BASE_URL}/Department`
    return this.http.get<Department[]>(uri);
  }

  findCitiesByIdDepartment(idDepartment: number):Observable<City[]>{
    const uri = `${this.BASE_URL}/Department/${idDepartment}/cities`
    return this.http.get<City[]>(uri);
  }
}
