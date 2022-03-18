import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-outer2',
  templateUrl: './outer2.component.html',
  styleUrls: ['./outer2.component.css']
})
export class Outer2Component implements OnInit {
  @Output()
  private changedValue = new EventEmitter<string>();

  constructor(private readonly data: DataService) { }

  ngOnInit(): void {
  }

  onclick1() {
    setTimeout(() => {
      this.changedValue.emit('via event');
    }, 1000);
  }

  onclick2() {
    setTimeout(() => {
      this.data.setText('via service');
    }, 1000);
  }
}
