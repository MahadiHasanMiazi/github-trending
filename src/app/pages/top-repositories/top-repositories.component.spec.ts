import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRepositoriesComponent } from './top-repositories.component';

describe('TopRepositoriesComponent', () => {
  let component: TopRepositoriesComponent;
  let fixture: ComponentFixture<TopRepositoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopRepositoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
