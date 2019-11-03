import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraloicauhoiComponent } from './traloicauhoi.component';

describe('TraloicauhoiComponent', () => {
  let component: TraloicauhoiComponent;
  let fixture: ComponentFixture<TraloicauhoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraloicauhoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraloicauhoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
