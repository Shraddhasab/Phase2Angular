import { DebugElement } from '@angular/core';

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { By } from '@angular/platform-browser';



import { LoginComponent } from './login.component';



describe('LoginComponent', () => {

  let component: LoginComponent;

  let fixture: ComponentFixture<LoginComponent>;



  beforeEach(async () => {

    await TestBed.configureTestingModule({

      declarations: [ LoginComponent ],

      imports: [FormsModule, ReactiveFormsModule]

    })

    .compileComponents();



    fixture = TestBed.createComponent(LoginComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });



  it('should create', () => {

    expect(component).toBeTruthy();

  });



  it('username type testing', ()=>{

    const rootEle:DebugElement = fixture.debugElement;



    const inp = rootEle.query(By.css('#userName'));



    const inpElement:HTMLElement = inp.nativeElement;



    expect(inpElement.getAttribute('type')).toEqual("text");

 

 })



 it('password type testing', ()=>{

  const rootEle:DebugElement = fixture.debugElement;



  const inp = rootEle.query(By.css('#password'));



  const inpElement:HTMLElement = inp.nativeElement;



  expect(inpElement.getAttribute('type')).toEqual("password");



})



it('username truthy', ()=>{

  const rootEle:DebugElement = fixture.debugElement;



  const inp = rootEle.query(By.css('#userName'));



  const inpElement:HTMLElement = inp.nativeElement;



  expect(inpElement).toBeTruthy();



})



it('username truthy', ()=>{

  const rootEle:DebugElement = fixture.debugElement;



  const inp = rootEle.query(By.css('#password'));



  const inpElement:HTMLElement = inp.nativeElement;



  expect(inpElement).toBeTruthy();



})

     




});
