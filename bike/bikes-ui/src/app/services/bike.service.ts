import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IBike } from './bike.model';

const httpOptions = {
  headers: new HttpHeaders({'Contect-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http: HttpClient) { }

  getBikes(){
    return this.http.get('/server/api/v1/bikes');
  }

  getBike(id:number){
    return this.http.get('server/api/v1/bikes/' + id);
  }

  createBikeRegistration(bike: IBike){
    let body = JSON.stringify(bike);
    return this.http.post('server/api/v1/bikes', body, httpOptions);
  }
}
