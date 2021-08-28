import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class GitServiceService {
  userProfile:Users[]=[];

  myURL= "https://api.github.com/user/"

  Token = `access_token= ${environment.myToken}`
  constructor(private Http:HttpClient) { }
}
