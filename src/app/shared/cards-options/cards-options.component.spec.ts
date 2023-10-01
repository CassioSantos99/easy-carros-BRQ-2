import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsOptionsComponent } from './cards-options.component';

describe('CardsOptionsComponent', () => {
  let component: CardsOptionsComponent;
  let fixture: ComponentFixture<CardsOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsOptionsComponent]
    });
    fixture = TestBed.createComponent(CardsOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
