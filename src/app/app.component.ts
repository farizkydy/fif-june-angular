import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Animal } from '../model/animal.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title: string = 'fif-june-angular';
  testVariable: string = 'something'
  anotherVariabel: string = 'value pertama';
  isApproved: boolean = true;
  dp: number = 0;
  fruit: string[] = []
  animal: Array<Animal> = []
  animals: Animal[] = [
    {
      name: 'badak',
      age: 10
    },
    {
      name: 'harimau'
    }
  ]


 testFunction() {
    const testVariable = 'test variable'
    this.anotherVariabel = testVariable;
  }

  anotherFunction() {
    let testVariable = 'test variable'
    testVariable = 'lalal'
    this.testVariable = 'someeee'
  }
}
