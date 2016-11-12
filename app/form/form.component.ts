import { Component, OnInit, Input } from '@angular/core';
import { formData } from '../models/form.model';

@Component({
  moduleId: module.id,
  selector: 'my-form',
  templateUrl: 'form.component.html'
})

export class FormComponent implements OnInit {
  list = ['Item1', 'Item2', 'Item3'];
  model = new formData('Danielle', 'd@ciandt.com', '19-99999', 'Campinas', 'São Paulo');

  constructor() { }

  ngOnInit() { }
}