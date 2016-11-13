import { Component, OnInit } from '@angular/core';
import { DatePickerCalendar } from '../ng2-bootstrap-examples/datepicker.component';
import { TextMaskExamplesComponent } from '../text-mask-examples/TextMaskExamples.component';

@Component({
  moduleId: module.id,
  selector: 'about',
  template: `<h1>About Page</h1>
             <h3>## Testing others Plugins ##</h3>
            <my-datepicker></my-datepicker>
            <my-text-mask></my-text-mask>
            `
})
export class AboutComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}