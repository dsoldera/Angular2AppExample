import { Component, OnInit } from '@angular/core';
declare var jQuery:any;

@Component({
  moduleId: module.id,
  selector: 'my-jquery',
  templateUrl: 'jqueryExamples.component.html'
})

export class jqueryExamplesComponent implements OnInit {
  constructor() {
    jQuery('body').addClass('dani');
   }

  ngOnInit() { }
}