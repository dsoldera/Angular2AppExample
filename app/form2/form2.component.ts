//import { MyLogger } from '../myLogger.module';
import { Component, OnInit, Input } from '@angular/core';
import { form2Data } from '../models/form2.model';

@Component({
  moduleId: module.id,
  selector: 'my-form-2',
  templateUrl: 'form2.component.html'
})

export class Form2Component implements OnInit {
   model2 = new form2Data('Danielle', 'Soldera', '', '', 'Default');
   hasErrorOnSelect =  true;

   validateSelect(event: string) {
    console.log(this.model2.options);
   }

  constructor() { }

  ngOnInit() { }
}