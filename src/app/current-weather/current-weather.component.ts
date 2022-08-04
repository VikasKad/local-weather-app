import { Component, OnInit } from '@angular/core'
import { ICurrentWeather } from '../interfaces'
import { WeatherService } from '../weather/weather.service'
@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather
  constructor(private weather: WeatherService) {
    this.current = {
      city: 'Bethesda',
      country: 'US',
      date: 1234234,
      image: 'assets/img/sunny.png',
      temperature: 72,
      description: 'sunny',
    } as ICurrentWeather
  }

  ngOnInit(): void {
    this.weather.getCurrentWeather('bethesda', 'US').subscribe((data) => {
      this.current = data
      console.log('current data', data)
    })
  }
}
