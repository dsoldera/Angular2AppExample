import { Component, OnInit, Input } from '@angular/core';
import { form2Data } from '../shared/models/form2.model';

@Component({
  moduleId: 'app-my-form-2',
  selector: 'app-my-form-2',
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
