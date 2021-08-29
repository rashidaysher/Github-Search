import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SearchUComponent } from './search-u/search-u.component';
import { GitDetailsComponent } from './git-details/git-details.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'User',component:GitDetailsComponent},
  {path:'Repo',component:SearchUComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
