import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyComponentTwoComponent } from './lazy-component-two.component';

describe('LazyComponentTwoComponent', () => {
  let component: LazyComponentTwoComponent;
  let fixture: ComponentFixture<LazyComponentTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyComponentTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyComponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
