import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopUserByCountryComponent } from './top-user-by-country.component';

describe('TopUserByCountryComponent', () => {
  let component: TopUserByCountryComponent;
  let fixture: ComponentFixture<TopUserByCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopUserByCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopUserByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
