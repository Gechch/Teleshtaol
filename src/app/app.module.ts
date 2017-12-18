import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2'
import {AngularFireDatabaseModule} from 'angularfire2/database'
import {environment} from "../environments/environment";
import {HttpService} from "./http.service";
import {HeaderComponent} from "./header/header.component";
import { ContentComponent } from './content/content.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { AllDataComponent } from './all-data/all-data.component';
import {Routes, RouterModule} from "@angular/router";


const appRouter:Routes=[
  { path: '', redirectTo: 'full', pathMatch: 'full' }]


 // Must export the config
@NgModule({
  declarations: [AppComponent,HeaderComponent, ContentComponent, AllDataComponent],
  imports: [BrowserModule ,HttpClientModule, FormsModule,RouterModule.forRoot(appRouter)],
  providers: [HttpService],
  bootstrap: [AppComponent],

})
export class AppModule {

}
