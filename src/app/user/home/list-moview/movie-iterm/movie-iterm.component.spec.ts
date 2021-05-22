import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieItermComponent } from './movie-iterm.component';

describe('MovieItermComponent', () => {
  let component: MovieItermComponent;
  let fixture: ComponentFixture<MovieItermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieItermComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieItermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
