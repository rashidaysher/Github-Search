import { Component, OnInit } from '@angular/core';
import { GitServiceService } from '../git-service.service';
import { GitUser } from '../git-user';
import { Users } from '../users';

@Component({
  selector: 'app-git-details',
  templateUrl: './git-details.component.html',
  styleUrls: ['./git-details.component.css']
})
export class GitDetailsComponent implements OnInit {
  userProfile:Users[]=[];
  userRepo:GitUser[]=[];

  constructor(public gitService:GitServiceService) { }
  getUser(searchUser:any){
    this.gitService.retriveUser(searchUser).then(
      (success)=>{
        this.userProfile= this.gitService.userProfile;
        console.log(this.userProfile)
      },
      (error)=>{
        return error;

      }
      
    );
    this.gitService.getRepo(searchUser).subscribe(
      (success)=>{
this.userRepo=success;
return (this.userRepo)
      }
    )
  }

  ngOnInit(): void {
    this.getUser("rashidaysher");

  }

}
