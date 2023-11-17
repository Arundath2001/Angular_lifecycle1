import { Component, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements AfterContentInit, AfterContentChecked {
  ngAfterContentInit() {
    console.log('ngAfterContentInit in ChildComponent');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked in ChildComponent');
  }
}
