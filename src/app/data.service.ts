import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getGeoInfo(lat: number, lng:number){
    // THINGS TO DO: Create Web API to call this url and secure API key
    // send only latitude and longitude to webAPI
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' +lat.toString()+ ',' +lng.toString()+ '&key=YOUR_API_KEY');
  }
}