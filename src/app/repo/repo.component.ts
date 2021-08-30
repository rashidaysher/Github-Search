import { Component, OnInit } from '@angular/core';
import { GitServiceService } from '../git-service.service';
import { GitRepo } from '../git-repo';
import { GitUser } from '../git-user';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  myRepo: GitUser[]=[];

  constructor (public appService: GitServiceService) {

   }
   retriveUser(searchUser:any){
     this.appService.getRepo(searchUser).subscribe(data=>{
       this.myRepo=data;
       return (this.myRepo)
     })
   }

   
 

  ngOnInit(): void {
    this.retriveUser('rashidaysher')
  }

}
