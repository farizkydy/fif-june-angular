import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Animal } from '../model/animal.interface';
import { CommonModule } from '@angular/common';
import { TableComponent } from './shared/table/table.component';
import { Creditur } from '../model/creditur.interface';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    TableComponent,
    FormsModule,
    ReactiveFormsModule
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
  parentData: Creditur[] = [
    {
      name: "Dr. Levi Russel",
      "age": 96,
      "job": "Direct Data Producer",
    },
    {
      "name": "Jimmy Gusikowski",
      "age": 59,
      "job": "Chief Quality Supervisor",
    },
    {
      "name": "Johen",
      "age": 49,
      
    }
  ]
  testFromChildren: string = ''
  imgUrl: string = 'https://picsum.photos/200/300'
  name: string = ''

  userForm = new FormGroup({
    name: new FormControl('Fariz', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email])
  })

 testFunction() {
    const testVariable = 'test variable'
    this.anotherVariabel = testVariable;
  }

  anotherFunction() {
    let testVariable = 'test variable'
    testVariable = 'lalal'
    this.testVariable = 'someeee'
  }
 
  recievedFromChildren(e: string) {
    this.testFromChildren = e;
    console.log('ini data di parent')
  }

  submit() {
    console.log('dataa')
  }
}
