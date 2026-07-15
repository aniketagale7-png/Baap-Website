import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAnalytics } from './data-analytics';

describe('DataAnalytics', () => {
  let component: DataAnalytics;
  let fixture: ComponentFixture<DataAnalytics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataAnalytics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataAnalytics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
