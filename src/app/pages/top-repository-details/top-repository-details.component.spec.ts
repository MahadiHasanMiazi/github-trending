import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRepositoryDetailsComponent } from './top-repository-details.component';

describe('TopRepositoryDetailsComponent', () => {
  let component: TopRepositoryDetailsComponent;
  let fixture: ComponentFixture<TopRepositoryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopRepositoryDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRepositoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
