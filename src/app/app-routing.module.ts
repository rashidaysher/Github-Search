import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SearchUComponent } from './search-u/search-u.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'User',component:SearchComponent},
  {path:'Repo',component:SearchUComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
