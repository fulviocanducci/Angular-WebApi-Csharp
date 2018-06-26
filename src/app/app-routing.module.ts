import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HowtoComponent } from './howto/howto.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReferenceComponent } from './reference/reference.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'howto', component: HowtoComponent},
  { path: 'login', component: LoginComponent},
  { path: 'reference', component: ReferenceComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }

