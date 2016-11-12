import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-form',
  templateUrl: 'form.component.html'
})
export class FormComponent implements OnInit {
  @Input()
  constructor() { }

  ngOnInit() { }
}