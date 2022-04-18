import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataModelExampleComponent } from './data-model-example.component';

describe('DataModelExampleComponent', () => {
  let component: DataModelExampleComponent;
  let fixture: ComponentFixture<DataModelExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataModelExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataModelExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
