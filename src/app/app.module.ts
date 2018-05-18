import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { RoundsModule } from './rounds/rounds.module';
import { AppRouterModule } from './app-router.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoundsModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
