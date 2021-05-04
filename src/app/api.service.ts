import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  getWeather(location: string){
    return this.http.get(
      'api.openweathermap.org/data/2.5/forecast/daily?q=Paris&cnt=14&appid=d1f1192c61bff34c70979e832a2dbab3' 
    );
  }
}
