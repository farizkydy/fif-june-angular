import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyorDetailComponent } from './surveyor-detail.component';

describe('SurveyorDetailComponent', () => {
  let component: SurveyorDetailComponent;
  let fixture: ComponentFixture<SurveyorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveyorDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
