import { Component, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements AfterContentInit, AfterContentChecked {
  
  ngAfterContentInit() {
    console.log('ngAfterContentInit in ParentComponent');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked in ParentComponent');
  }
}
