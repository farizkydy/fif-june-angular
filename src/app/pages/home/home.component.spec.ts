import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { of, throwError } from 'rxjs';
import { ApiService } from '../../services/api/api.service';
import { ApiMockService } from '../../services/api/api.mock';

let mockData = [
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

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockApiService: jasmine.SpyObj<ApiService>;
  mockApiService = jasmine.createSpyObj('ApiService', ['getData']);
  

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [{ provide: ApiService, useClass: ApiMockService }]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getData and handle success response', () => {
    mockApiService.getData.and.returnValue(of(mockData));

    component.getData();

    expect(component.parentData).toEqual(mockData);
    expect(component.wordingMessage).toBe('sukses mengambil data dari API');
  });

  it('should call getData and handle success response when isCondtional true', () => {
    mockApiService.getData.and.returnValue(of(mockData));
    component.isConditional = true;

    component.getData();

    expect(component.parentData).toEqual(mockData);
    expect(component.wordingMessage).toBe('sukses mengambil data dari APIpp');
  });

  // it('should call getData and handle error response', () => {
  //   const errorResponse = { status: 400 };
  //   mockApiService.getData.and.returnValue(throwError(() => errorResponse));

  //   component.getData();

  //   expect(component.wordingMessage).toBe('gagal mengambil data dari API');
  // });

  // it('should initialize with default values', () => {
  //   expect(component.wordingMessage).toBe('');
  //   expect(component.parentData).toEqual([]);
  // });

  // it('should call getData on ngOnInit', () => {
  //   spyOn(component, 'getData');
  //   component.ngOnInit();
  //   expect(component.getData).toHaveBeenCalled();
  // });

  // it('should update parentData and wordingMessage correctly on successful API call', () => {
  //   mockApiService.getData.and.returnValue(of(mockData));

  //   component.getData();

  //   expect(component.parentData).toEqual(mockData);
  //   expect(component.wordingMessage).toBe('sukses mengambil data dari API');
  // });

  // it('should log error and update wordingMessage on failed API call', () => {
  //   const errorResponse = { status: 500, message: 'Internal Server Error' };
  //   spyOn(console, 'error');
  //   mockApiService.getData.and.returnValue(throwError(() => errorResponse));

  //   component.getData();

  //   expect(console.error).toHaveBeenCalledWith('error', errorResponse);
  //   expect(component.wordingMessage).toBe('gagal mengambil data dari API');
  // });

  // it('should call getData and handle error response', () => {
  //   const errorResponse = { status: 400 };
  //   mockApiService.getData.and.returnValue(throwError(() => errorResponse));

  //   component.getData();

  //   expect(component.wordingMessage).toBe('gagal mengambil data dari API');
  // });
});

