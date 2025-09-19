import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCrediturComponent } from './detail-creditur.component';

describe('DetailCrediturComponent', () => {
  let component: DetailCrediturComponent;
  let fixture: ComponentFixture<DetailCrediturComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailCrediturComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCrediturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
