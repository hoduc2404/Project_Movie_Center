import { Component, OnInit } from '@angular/core';
import { MovieGET } from 'src/app/Core/Model/Movie';
import { CinemaService } from 'src/app/Core/Services/cinema.service';
import { MovieService } from 'src/app/Core/Services/movie.service';

@Component({
  selector: 'app-movie-schedule-handle',
  templateUrl: './movie-schedule-handle.component.html',
  styleUrls: ['./movie-schedule-handle.component.scss']
})
export class MovieScheduleHandleComponent implements OnInit {
  listPhimGet:MovieGET[] = [] ;
  listCinema:any[] = [
    { "maHeThongRap":"",
    "tenHeThongRap":"Vui lòng chọn phim",
    "logo":""}
   
  ];
  textPhim:string = "Phim";
  textRap:string = "Rạp";
  constructor(private phim:MovieService,private cinema:CinemaService) { }

  ngOnInit(): void {
    this.getListPhim();
    // this.getListRap();
  }
  //laydanhsachphim
  getListPhim(){
    this.phim.getListMovie().subscribe({
      next:(res)=>{
        this.listPhimGet = res;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  //laydanhsachrap
  getListRap(){
    this.cinema.getListCinema().subscribe({
      next:(res:any)=>{
        this.listCinema = res;
        console.log(res)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  clickSelectPhim(tenphim:any,maphim:any){
      this.textPhim = tenphim
      this.cinema.getInforMovieSchedule(maphim).subscribe({
        next:(res:any) =>{
          this.listCinema = res.heThongRapChieu;
        },
        error:(err)=>{
          console.log(err);
        }
      })
  }

  clickSelectRap(ten:string,maHeThongRap:any){
      if(ten == "Vui lòng chọn phim"){
        
      }
      else{
        this.textRap = ten;
        this.cinema.getInfoShowTime(maHeThongRap).subscribe({
          next:(res:any) =>{
              console.log(res[0].lstCumRap.map((sp:any,index:any)=>{
                  return sp.danhSachPhim.map((sp:any,index:any) =>{
                    return sp.tenPhim = 'Yêu tinh'
                  })
              }));
          },
          error:(err)=>{

          }
        })
      }
  }
}
