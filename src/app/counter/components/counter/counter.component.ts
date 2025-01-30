
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>Counter: {{counter}}</h3>


<button (click)="increaseBy(-1)">-1</button>
<button (click)="resetCounter(10)">Reset</button>
<button (click)="increaseBy(1)">+1</button>
  <hr>`,
  standalone: false
  // templateUrl: 'name.component.html'
})

export class CounterComponent {

  public counter: number = 10;

  increaseBy(value: number): void {
    // value ? this.counter += 1 : this.counter -= 1
    this.counter += value
  }

  resetCounter(value: number): void {
    this.counter = value
  }

}
