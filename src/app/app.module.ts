import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HowtoComponent } from './howto/howto.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReferenceComponent } from './reference/reference.component';

@NgModule({
  declarations: [
    AppComponent,
    HowtoComponent,
    HomeComponent,
    LoginComponent,
    ReferenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
