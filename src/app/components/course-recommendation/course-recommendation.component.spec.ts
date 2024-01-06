import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseRecommendationComponent } from './course-recommendation.component';

describe('CourseRecommendationComponent', () => {
  let component: CourseRecommendationComponent;
  let fixture: ComponentFixture<CourseRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseRecommendationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
