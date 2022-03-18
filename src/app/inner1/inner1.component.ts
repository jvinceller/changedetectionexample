import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-inner1',
  templateUrl: './inner1.component.html',
  styleUrls: ['./inner1.component.css']
})
export class Inner1Component implements OnInit, OnChanges {
  @Input()
  innerVariable: string | undefined;

  ngOnInit(): void {
  }

  selChanged(event: MatSelectChange) {
    this.innerVariable = event.value;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['innerVariable']) {
      console.log('ngOnChanges: ', changes['innerVariable'].currentValue);
    }
  }
}
