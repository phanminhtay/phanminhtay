import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGuitarComponent } from './card-guitar.component';

describe('CardGuitarComponent', () => {
  let component: CardGuitarComponent;
  let fixture: ComponentFixture<CardGuitarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardGuitarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGuitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
