import { MovieService } from './../../../Core/Services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-moview',
  templateUrl: './list-moview.component.html',
  styleUrls: ['./list-moview.component.scss']
})
export class ListMoviewComponent implements OnInit {

  constructor(private Movie:MovieService) { }

  ngOnInit(): void {
    this.getListMovie()
  }
  //Lay danh sach phim
  getListMovie(){
    this.Movie.getListMovie().subscribe({
      next:(res) =>{
        console.log(res);
      },
      error:(err) =>{
        console.log(err)
      }
    })
  }



}
