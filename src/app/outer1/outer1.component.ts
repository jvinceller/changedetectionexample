import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-outer1',
  templateUrl: './outer1.component.html',
  styleUrls: ['./outer1.component.css']
})
export class Outer1Component implements OnInit {

  @Input()
  outerVariable: string | undefined;

  ngOnInit(): void {
  }

}
