import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSuggestionsComponent } from './employee-suggestions.component';

describe('EmployeeSuggestionsComponent', () => {
  let component: EmployeeSuggestionsComponent;
  let fixture: ComponentFixture<EmployeeSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSuggestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
