import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-inner2',
  templateUrl: './inner2.component.html',
  styleUrls: ['./inner2.component.css']
})
export class Inner2Component implements OnInit {
  inputValue: string | undefined;

  constructor(private readonly data: DataService) {
  }

  ngOnInit(): void {
  }

  inputChanged(event: any) {
    this.inputValue = event.target.value;
    if (this.inputValue) {
      console.log('input changed');
      this.data.setText(this.inputValue);
    }
  }
}
