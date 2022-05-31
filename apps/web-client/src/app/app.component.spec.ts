import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { APP_CONFIG } from '@smart-home/app-conf';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { WebApiModule } from '@smart-home/web-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCommonModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import DoneCallback = jest.DoneCallback;

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent> = null;
  let app: AppComponent = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        HttpClientModule,
        WebApiModule,
        BrowserAnimationsModule,
        MatCommonModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule],
      providers: [
        { provide: APP_CONFIG, useValue: environment }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  afterEach(() => {
    fixture = null;
    app = null;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'web-client'`, () => {
    expect(app.title).toEqual('web-client');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('[data-test-name="page-title"]')?.textContent).toContain(
      'Smart home'
    );
  });

  it('should toggle left menu', () => {
    // arrange
    const currentToggleState: boolean = app.sideNavOpened;

    // act
    app.openSideNav();

    // assert
    expect(currentToggleState).toEqual(false);
    expect(app.sideNavOpened).toEqual(true);
  });

  it('should be able to make action', (done: DoneCallback) => {
    // arrange

    jest.spyOn(app.actionsService, 'makeAction');
    // act
    app.makeAction();

    // assert
    expect(app.actionsService.makeAction).toHaveBeenCalled();
    done();
  });
});
