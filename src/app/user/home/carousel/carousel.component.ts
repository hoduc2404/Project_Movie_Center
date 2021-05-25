import { Component, OnInit } from '@angular/core';
import { SliderService } from 'src/app/Core/Services/slider.service';



@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  display:boolean = false;
  text_movie_hu:any;
  Slider_Array:any;
  constructor(private slider:SliderService) { }

  ngOnInit(): void {
    this.Slider_Array = this.slider.getSlider();
  }
  close(text : boolean){
    this.display = text;
  }
  playModel(text:any){
    this.display = true
    this.text_movie_hu = text
  }
}
