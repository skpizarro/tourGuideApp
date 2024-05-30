import { Injectable } from '@angular/core';
import { environment } from '../../environment-dev';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { TouristicAttraction } from '../interfaces/touristic-attraction.interface';

@Injectable({
  providedIn: 'root'
})
export class TourGuideService {


  BASE_URL = environment.URL_BASE;

  constructor(private http: HttpClient) { }

  private touristicAttractionSubject:BehaviorSubject<TouristicAttraction[]> = new BehaviorSubject([] as TouristicAttraction[]);
  private touristicAttractionSubjectCopy:BehaviorSubject<TouristicAttraction[]> = new BehaviorSubject([] as TouristicAttraction[]);
  touristicAttraction$ = this.touristicAttractionSubject.asObservable();
  touristicAttractionCopy$ = this.touristicAttractionSubjectCopy.asObservable();


  getTouristicAttractionsList():TouristicAttraction[]{
    return this.touristicAttractionSubject.getValue();
  }

  setTouristicAttractionsList(newTouristicAttractionList:TouristicAttraction[]):void{
    this.touristicAttractionSubject.next(newTouristicAttractionList);
  }

  setTouristicAttractionsListCopy(newTouristicAttractionList:TouristicAttraction[]):void{
    this.touristicAttractionSubjectCopy.next(newTouristicAttractionList);
  }

  findTouristicAttractionsList():Observable<TouristicAttraction[]>{
    const uri = `${this.BASE_URL}/TouristicAttraction`
    return this.http.get<TouristicAttraction[]>(uri);
  }

}
