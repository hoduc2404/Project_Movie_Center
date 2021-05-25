import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor(private api:ApiService) { }

  getSlider(){
    return [
      {
        img:"../../../../assets/Image/Banner/Bogia.jpg",
        trailer : "https://www.youtube.com/embed/jluSu8Rw6YE"
      },
      {
        img:"../../../../assets/Image/Banner/avenger.jpg",
        trailer : "https://www.youtube.com/embed/6ZfuNTqbHE8"
      },
      {
        img:"../../../../assets/Image/Banner/matbiec.jpg",
        trailer : "https://www.youtube.com/embed/KSFS0OfIK2c"
      },
      {
        img:"../../../../assets/Image/Banner/telnet.jpg",
        trailer : "https://www.youtube.com/embed/AZGcmvrTX9M"
      },
    ]
  }
}
