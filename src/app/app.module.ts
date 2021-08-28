import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClient} from '@angular/common/http'
import { AppComponent } from './app.component';
import { RepoComponent } from './repo/repo.component';
import { GitDetailsComponent } from './git-details/git-details.component';
import { GitSearchComponent } from './git-search/git-search.component';

@NgModule({
  declarations: [
    AppComponent,
    RepoComponent,
    GitDetailsComponent,
    GitSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClient,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
