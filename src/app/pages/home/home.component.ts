import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  wordingMessage = '';
  parentData: any[] = [];
  isConditional: boolean = false;
  formGroup: FormGroup = new FormGroup({});

  constructor(
    private apiService: ApiService
  ) {
    this.formGroup = new FormGroup({
      jobName: new FormControl(''),
      company: new FormControl('')
    });
  }
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.apiService.getData().subscribe((data: any) => {
      // code menajlanakan kondisi sukses
      console.log('data dari api', data);
      this.parentData = data;
      if (this.isConditional) {

        this.wordingMessage = 'sukses mengambil data dari APIpp';
      } else {
        this.wordingMessage = 'sukses mengambil data dari API';
      }
     }, 
     (err) => {
      // code menajlanakan kondisi error
      console.error('error', err);
      this.wordingMessage = 'gagal mengambil data dari API';
     })
  }

  addData() {
    const payload = this.formGroup.value;
    this.apiService.addData(this.formGroup.value).subscribe((data: any) => {
      // code menajlanakan kondisi sukses
      console.log('data dari api', data);
      this.getData();
     }, (err) => {
      // code menajlanakan kondisi error
      console.error('error', err);
     })
  }

}
