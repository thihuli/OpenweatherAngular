import { Component, OnInit } from '@angular/core';
import { Weaterservice} from './services/weather.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  location = {cityName: '' }
  weather = undefined

  constructor(private weatherService: Weaterservice) {}

  ngOnInit() {
    this.getweather(this.location.cityName)

  }

  getweather(cityName: string) {
    this.weatherService
    .getweather(cityName)
    .subscribe(
      res => {
        console.log(res)
        this.weather = res;
       },
       err => {
         console.log(err)
       }
    )
  }

  submitLocation(cityName: HTMLInputElement) {
    if (cityName.value) {
      this.getweather(cityName.value)

      cityName.value = ''
    } else {
      alert('Porfavor insira uma cidade')
    }
    cityName.focus()
    return false;
  }

}
