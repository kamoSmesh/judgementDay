import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule}from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CardComponent } from './components/card/card.component';
import { LikeComponent } from './components/like/like.component';
import { CommentComponent } from './components/comment/comment.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [LoginComponent,
     RegisterComponent,
     CardComponent,
      LikeComponent,
       CommentComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  exports:[
    LoginComponent,
     RegisterComponent,
     CardComponent,
     LikeComponent,
      CommentComponent
  ]
})
export class AuthModule { }
