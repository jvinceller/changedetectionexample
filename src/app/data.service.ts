import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private text: string = 'data-initial';
  private changesController$ = new BehaviorSubject(this.text);
  changes$ = this.changesController$.asObservable();

  constructor() { }

  setText(value: string): void {
    this.text = value;
    this.changesController$.next(value);
  }

  getText(): string {
    return this.text;
  }
}
