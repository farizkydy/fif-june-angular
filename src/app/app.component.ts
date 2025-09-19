import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Animal } from '../model/animal.interface';
import { CommonModule } from '@angular/common';
import { TableComponent } from './shared/table/table.component';
import { Creditur } from '../model/creditur.interface';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormInputDataComponent } from './shared/form-input-data/form-input-data.component';
import { CrediturDataService } from './services/creditur-data/creditur-data.service';
import { ApiService } from './services/api/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    TableComponent,
    FormsModule,
    ReactiveFormsModule,
    FormInputDataComponent
  ],
  providers: [CrediturDataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent  {

}
