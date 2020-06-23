import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import{CardComponent} from './components/card/card.component'

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  {path:'card',component:CardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
