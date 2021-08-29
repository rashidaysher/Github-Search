import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class GitServiceService {
  userProfile:Users[]=[];

  myURL= "https://api.github.com/users/"

  token = `?access_token=`;
  constructor(private Http:HttpClient) { }

  retriveUser(searchUser:any){
    interface data{
      name:any;
      id: any;
      avatar_url:any;
      location:any;
      login:any;
      following:any;
      followers:any;
      public_repos:any;
    }
    return new Promise<void>((resolve, reject) => {
     this.userProfile=[];
     this.Http.get <data>(this.myURL+searchUser+this.token).toPromise().then(
       (results)=>{this.userProfile.push(results);
        console.log(results)
        resolve();

       },
       (error)=>{
         reject()
       }
     )

    })
  }
}
