import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { FooterAdminComponent } from './footer-admin/footer-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { B1Component } from './b1/b1.component';
import { B2Component } from './b2/b2.component';

const routes: Routes = [
  {path:"",component:AdminComponent,
      children:[
        {path:"",component :B1Component },
        {path:"b2",component:B2Component}
      ]
  },
  
];
@NgModule({
  declarations: [
    AdminComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    B1Component,
    B2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    AdminComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    B1Component,
    B2Component
  ]
})
export class AdminModule { }
