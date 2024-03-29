import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionBlockComponent } from './question-block.component';

describe('QuestionBlockComponent', () => {
  let component: QuestionBlockComponent;
  let fixture: ComponentFixture<QuestionBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
