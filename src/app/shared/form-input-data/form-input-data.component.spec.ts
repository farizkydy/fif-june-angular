import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputDataComponent } from './form-input-data.component';

describe('FormInputDataComponent', () => {
  let component: FormInputDataComponent;
  let fixture: ComponentFixture<FormInputDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormInputDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInputDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
