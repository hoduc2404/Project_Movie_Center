import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  constructor(private api:ApiService) { }

  getListCinema(){
    return this.api.get("QuanLyRap/LayThongTinHeThongRap")
  }
  getInforMovieSchedule(maphim:any){
    return this.api.get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maphim}`)
  }
  getInfoShowTime(maHeThongRap:any){
      return this.api.get(`QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP01`)
  }

}
