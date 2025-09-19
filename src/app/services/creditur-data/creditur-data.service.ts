import { Injectable } from '@angular/core';
import { Creditur } from '../../../model/creditur.interface';

@Injectable({
  providedIn: 'root'
})
export class CrediturDataService {
  crediturList: Creditur[] = [
    {
      name: "Dr. Levi Russel",
      "age": 96,
      "job": "Direct Data Producer",
      dp: 100
    },
    {
      "name": "Jimmy Gusikowski",
      "age": 59,
      "job": "Chief Quality Supervisor",
      dp: 200
    },
    {
      "name": "Johen",
      "age": 49,
      dp: 300
    }
  
    ]

  constructor() { }

  getData() {
    return this.crediturList;
  }

  addData(crediturData: Creditur) {
    this.crediturList.push(crediturData)
  }

  deleteCrediturData(crediturDataId: string) {
    // do something
  }
}
