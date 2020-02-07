import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city :string;
  state :string;
  weatherreport;
  forecastreport;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    //this.getWeatherdetails(this.city,this.state);
  }
  getWeatherdetails(city,state) {
    this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.city + ',' + this.state + '&APPID=e6b0b8dcf4a4b48aa4f1a5e921e6c61c')
    .subscribe((data) => { 
      this.weatherreport = data as string [];
    //  console.log(this.weatherreport);
   });
      this.gethourlyforecast(city,state);
  };
  gethourlyforecast(city,state){
    this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + this.city + ',' + this.state + '&APPID=e6b0b8dcf4a4b48aa4f1a5e921e6c61c')
    .subscribe((data) => { 
      this.forecastreport = data as string [];
      console.log(this.forecastreport); });
  };
  
}
