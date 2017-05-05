import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: 'app-about',
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  totalVotes: number = 0;
  title: string = 'About Component';

  constructor() { }

  ngOnInit() { }

  upVote(){
    this.totalVotes++;
  }

  downVote() {
    this.totalVotes--;
  }
}
