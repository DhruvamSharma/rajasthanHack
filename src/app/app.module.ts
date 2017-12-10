import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BuyerComponent } from './buyer/buyer.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    
  ],
  declarations: [
    AppComponent,
    
    BuyerComponent,
    
    NavbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
