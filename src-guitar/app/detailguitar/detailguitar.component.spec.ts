import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailguitarComponent } from './detailguitar.component';

describe('DetailguitarComponent', () => {
  let component: DetailguitarComponent;
  let fixture: ComponentFixture<DetailguitarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailguitarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailguitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
