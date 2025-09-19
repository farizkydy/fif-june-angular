import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Creditur } from '../../../model/creditur.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  api: string = 'https://63010185e71700618a32d3bb.mockapi.io/job'
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.api);
  }

  addData(data: Creditur) {
    return this.http.post(this.api, data);
  }
}
