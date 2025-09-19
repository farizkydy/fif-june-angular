import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Creditur } from '../../../model/creditur.interface';

@Component({
  selector: 'app-form-input-data',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  templateUrl: './form-input-data.component.html',
  styleUrl: './form-input-data.component.scss'
})
export class FormInputDataComponent {
  @Output() addKreditur = new EventEmitter<Creditur>();

    krediturForm = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        age: new FormControl('', [Validators.required, Validators.min(1), Validators.max(120)]),
        job: new FormControl('', [Validators.required, Validators.minLength(3)]),
        dp: new FormControl('', [Validators.required, Validators.min(1), Validators.max(120)]),
    });

    onSubmit(): void {
        if (!this.krediturForm.valid) return;

        const formValue = this.krediturForm.value;
        const newKreditur: Creditur = {
            name: formValue.name || '',
            age: Number(formValue.age) || 0,
            job: formValue.job || '',
            dp: Number(formValue.dp) || 0
        };

        this.addKreditur.emit(newKreditur);
        this.krediturForm.reset();
    }

    // Helper method untuk template
    isFieldInvalid(fieldName: string): boolean {
        const field = this.krediturForm.get(fieldName);
        return !!(field?.invalid && field?.touched);
    }
}
