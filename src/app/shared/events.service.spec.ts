import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { EventService } from './events.service';
import { HttpClient } from '@angular/common/http';

describe('EventsService', () => {
  let service: EventService;
  let httpMock:HttpTestingController;
  let httpClient:HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule,RouterTestingModule ],
      providers:[EventService]
      
    });
    service = TestBed.inject(EventService);
    httpMock= TestBed.get(HttpTestingController);
    httpClient= TestBed.inject(HttpClient);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
