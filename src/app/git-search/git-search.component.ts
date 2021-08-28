import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {

  constructor() { }
  searchUser:any;

  @Output() 
  searchEmitter=new EventEmitter <any>();
  searchBtn(){
    this.searchEmitter.emit(this.searchUser);
  }

  ngOnInit(): void {
  }

}
