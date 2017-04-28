import { Component, OnInit, Input } from '@angular/core';
import { formData } from '../models/form.model';

@Component({
  moduleId: 'app-my-form',
  selector: 'app-my-form',
  templateUrl: 'form.component.html'
})

export class FormComponent implements OnInit {
  list = ['Item1', 'Item2', 'Item3'];
  model = new formData('Danielle', 'd@ciandt.com', '19-99999', 'Campinas', 'São Paulo', false, ' ', ' ');

  changeEmail(value: string) {
    if(value.length > 0) {
      this.model.email = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      this.model.email = value;
    }
  }

  constructor() { }

  ngOnInit() { }
}
