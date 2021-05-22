import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMoviewComponent } from './list-moview.component';

describe('ListMoviewComponent', () => {
  let component: ListMoviewComponent;
  let fixture: ComponentFixture<ListMoviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMoviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMoviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
