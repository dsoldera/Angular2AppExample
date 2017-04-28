import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: 'app-error-page',
  selector: 'app-error-page',
  templateUrl: './error-page.component.html'
})
export class ErrorPageComponent implements OnInit {

  @Input() messageError: string;

  constructor() {
    this.messageError = 'Error Page - URL não encontrada';
  }

  ngOnInit() { }
}
