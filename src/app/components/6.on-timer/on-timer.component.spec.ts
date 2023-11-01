import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnTimerComponent } from './on-timer.component';

describe('OnTimerComponent', () => {
  let component: OnTimerComponent;
  let fixture: ComponentFixture<OnTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnTimerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
