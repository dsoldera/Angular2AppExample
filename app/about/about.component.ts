import { Component, OnInit } from '@angular/core';
import { DatePickerCalendar } from '../ng2-bootstrap-examples/datepicker.component';
import { TextMaskExamplesComponent } from '../text-mask-examples/TextMaskExamples.component';
import { Ng2SelectPluginComponent } from '../ng2-select-plugin/Ng2SelectPlugin.component';
import { jqueryExamplesComponent } from '../jquery-examples/jqueryExamples.component';

@Component({
  moduleId: module.id,
  selector: 'about',
  template: `<h1>About Page</h1>
             <h3>## Testing others Plugins ##</h3>
            <my-datepicker></my-datepicker>
            <my-text-mask></my-text-mask>
            <my-ng2select-plugin></my-ng2select-plugin>
            <my-jquery></my-jquery>
            `
})
export class AboutComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}