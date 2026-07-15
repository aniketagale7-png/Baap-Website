import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireReadyTalent } from './hire-ready-talent';

describe('HireReadyTalent', () => {
  let component: HireReadyTalent;
  let fixture: ComponentFixture<HireReadyTalent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HireReadyTalent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HireReadyTalent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
