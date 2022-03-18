import {Component, OnInit} from '@angular/core';
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  appVariable: string = '';

  constructor(private readonly data: DataService) {
  }

  ngOnInit(): void {
    this.appVariable = 'initial';

    this.data.changes$.subscribe(change => {
      this.appVariable = change;
      console.log(change);
    });

    setTimeout(() => {
      this.appVariable = 'async';
    }, 1000);
  }

  forwardChange(value: string) {
    setTimeout(() => {
      this.appVariable = value;
    }, 1000);
  }
}
