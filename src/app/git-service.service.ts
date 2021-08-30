import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Users } from './users';
import { GitRepo } from './git-repo'; //added
import { error } from '@angular/compiler/src/util';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GitServiceService {
  userProfile:Users[]=[];

  myRepos:GitRepo[]=[]; //added

  myURL= "https://api.github.com/users/"
  mine = "Mr4S8SSFJOFK3gO7oI"

  token = `?access_token=${environment.myToken}${this.mine}`;
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
     this.Http.get <data>(this.myURL+searchUser+this.token ).toPromise().then(
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
getRepo(searchUser:any):Observable<any>{
  return this.Http.get(this.myURL+searchUser+"/repos"+this.token)
}




  // getRepo(searchUser:any){
  //   interface data {
  //     name:any;
  //   }

  //   return new Promise<void>((resolve, reject)=>{
  //     this.myRepos = [];
  //     this.Http.get<data>(this.myURL+ searchUser+ '/repos' + this.token).toPromise().then(
  //       (results)=>{this.myRepos.push(results);
  //         resolve();
  //       },
  //       (error)=>{
  //         reject(error)
  //       }
  //       )
  //      }
  //   )
  // }
}
