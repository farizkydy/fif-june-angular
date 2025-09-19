import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiMockService {
  private mockData = [
    {
      createdAt: '2025-06-24T17:15:04.878Z',
      name: 'Reginald Koepp',
      age: 56,
      job: 'International Security Executive',
      isApproved: false,
      dp: 72,
      price: 100,
      id: '1',
    }
  ];

  constructor() {}

  getData(): Observable<any[]> {
    return of(this.mockData);
  }
}