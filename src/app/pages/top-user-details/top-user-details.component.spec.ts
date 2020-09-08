import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopUserDetailsComponent } from './top-user-details.component';

describe('TopUserDetailsComponent', () => {
  let component: TopUserDetailsComponent;
  let fixture: ComponentFixture<TopUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopUserDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
