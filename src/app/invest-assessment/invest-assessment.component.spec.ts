import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestAssessmentComponent } from './invest-assessment.component';

describe('InvestAssessmentComponent', () => {
  let component: InvestAssessmentComponent;
  let fixture: ComponentFixture<InvestAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestAssessmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
