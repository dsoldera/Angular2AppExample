import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-ng2select-plugin',
  templateUrl: 'Ng2SelectPlugin.component.html'
})

// More Examples
// https://github.com/valor-software/ng2-select/tree/master/demo/components/select

export class Ng2SelectPluginComponent implements OnInit {
  
  private filterSelection: string[];
  
  public filterItems: string[] = ["alpha","beta","gamma"];

  public setFilterSelection(value: any): void {
      this.filterSelection = value;
  }

  constructor() { }

  ngOnInit() { }
}