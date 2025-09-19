import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LoginComponent } from "./login.component";
import { AuthService } from "../../shared/auth/auth.service";
import { Router } from "@angular/router";

xdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceMock: any;
  let routerMock: any;

  beforeEach(async () => {
    authServiceMock = {
      login: jasmine.createSpy('login').and.returnValue({
        subscribe: jasmine.createSpy('subscribe')
      })
    };

    routerMock = {
      navigate: jasmine.createSpy('navigate')
    };

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        { provide: Router, useValue: routerMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initialize email, password, and error properties', () => {
    expect(component.email).toBe('');
    expect(component.password).toBe('');
    expect(component.error).toBe('');
  });

  it('should call auth.login with email and password on login', () => {
    component.email = 'test@example.com';
    component.password = 'password123';
    component.onLogin();

    expect(authServiceMock.login).toHaveBeenCalledWith('test@example.com', 'password123');
  });

  it('should navigate to /home on successful login', () => {
    const loginSuccessCallback = authServiceMock.login().subscribe.calls.argsFor(0)[0].next;
    loginSuccessCallback();

    expect(routerMock.navigate).toHaveBeenCalledWith(['/home']);
  });

  it('should set error message on failed login', () => {
    const loginErrorCallback = authServiceMock.login().subscribe.calls.argsFor(0)[0].error;
    loginErrorCallback();

    expect(component.error).toBe('Login failed. Please try again.');
  });
});