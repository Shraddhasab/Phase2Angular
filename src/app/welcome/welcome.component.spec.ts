import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RepeatDataPipe } from '../pipe/repeat.pipe';

import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeComponent,RepeatDataPipe ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display data as 10',()=>{
    component.data =10;
    fixture.detectChanges();
    const rootEle:DebugElement=fixture.debugElement;

    const h1 =rootEle.query(By.css('h1'));
    const h2 =rootEle.query(By.css('h2'));
    const elemnt=fixture.nativeElement;

    const title=elemnt.querySelector('title');

    const h1Native:HTMLElement=h1.nativeElement;
    const h2Native:HTMLElement=h2.nativeElement;
    expect(title.textContent).toEqual("Welcome");
    expect(h2Native.textContent).toEqual("Welcome to Our Application");
    expect(h1Native.textContent).toContain('10');


  });

  it('should show name twice',()=>{
    const titleNative=fixture.nativeElement;
    const title=titleNative.querySelector("#pipeTest");

    expect(title.textContent).toEqual("vanshvansh");
  })


 

});
