import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RepoComponent } from './repo/repo.component';
import { GitDetailsComponent } from './git-details/git-details.component';
import { GitSearchComponent } from './git-search/git-search.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SearchUComponent } from './search-u/search-u.component';
import { HighlightDirective } from './highlight.directive';
import { DateAgoPipe } from './pipes/date-ago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RepoComponent,
    GitDetailsComponent,
    GitSearchComponent,
    HomeComponent,
    SearchComponent,
    SearchUComponent,
    HighlightDirective,
    DateAgoPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
