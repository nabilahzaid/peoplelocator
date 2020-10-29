import { Component} from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: any;
  lng: any;
  urlStr: string;
  geoinfo: Object;
  firstInfo: Object;
  justAddress: string;
  
  constructor(private data: DataService){}
  ngOnInit(){}

  checkInWork() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude + "," + position.coords.longitude);
        this.data.getGeoInfo(position.coords.latitude, position.coords.longitude)
        .subscribe(geodata => {
          this.geoinfo = geodata;
          
          this.urlStr = JSON.stringify(this.geoinfo, (key, value) => {
            if (key === 'results') {
              // console.log(value[0]);
              console.log(value);
              this.firstInfo = JSON.stringify(value[0], (key, value) => {
                if (key === 'formatted_address') {
                  this.justAddress = value;
                  return value;
                } else {
                  return value;
                }
              });
              return value[0];
            } else {
              return value;
            }
          });
        });
      });
    } else {
      console.log("No location selected")
    }
  }
}