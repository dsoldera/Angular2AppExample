import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-text-mask',
  templateUrl: 'TextMaskExamples.component.html'
})

export class TextMaskExamplesComponent implements OnInit {

  public myModel: string = ''
  public modelWithValue: string
  public mask: Array<string | RegExp>

  constructor() {
    this.mask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/,/\d/,/\d/, '-', /\d/, /\d/, /\d/, /\d/]
    this.myModel = ''
    this.modelWithValue = '19996551604'
   }

   ngOnInit() { }
}