import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: 'app-about',
  selector: 'app-about',
  template: `<h1>About Page</h1>
             <h3>## Testing others Plugins ##</h3> `
})
export class AboutComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
