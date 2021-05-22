import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieScheduleHandleComponent } from './movie-schedule-handle.component';

describe('MovieScheduleHandleComponent', () => {
  let component: MovieScheduleHandleComponent;
  let fixture: ComponentFixture<MovieScheduleHandleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieScheduleHandleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieScheduleHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
