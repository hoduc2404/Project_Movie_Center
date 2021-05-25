import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { MovieScheduleHandleComponent } from './home/movie-schedule-handle/movie-schedule-handle.component';
import { ListMoviewComponent } from './home/list-moview/list-moview.component';
import { MovieItermComponent } from './home/list-moview/movie-iterm/movie-iterm.component';
import { ModalYoutubeComponent } from './home/modal-youtube/modal-youtube.component';
import { PipeModule } from '../pipe/pipe.module';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [{ 
      path: '', component: UserComponent,
      children:[
        {path:'',component:HomeComponent},
      ]
      }];
@NgModule({
  declarations: [
    UserComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    MovieScheduleHandleComponent,
    ListMoviewComponent,
    MovieItermComponent,
    ModalYoutubeComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes),PipeModule,MatButtonModule],
  exports: [UserComponent, HeaderComponent, FooterComponent, HomeComponent,CarouselComponent,MovieScheduleHandleComponent,ListMoviewComponent,MovieItermComponent,ModalYoutubeComponent],
})
export class UserModule {}
