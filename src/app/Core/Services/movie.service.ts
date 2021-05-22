import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MovieGET } from '../Model/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private api:ApiService) { }

  getListMovie():Observable<any>{
    return this.api.get<any>("QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
  }
}
