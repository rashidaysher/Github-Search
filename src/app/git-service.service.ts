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

  token = `access_token= ${environment.myToken}`
  constructor(private Http:HttpClient) { }

  retriveUser(searchUser:any){
    return new Promise((resolve, reject) => {
     this.userProfile=[];
     this.Http.get(this.myURL+searchUser+this.token).toPromise().then(
       (results)=>{this.userProfile.push(results);
        // resolve();

       },
       (error)=>{
         reject()
       }
     )

    })
  }
}
