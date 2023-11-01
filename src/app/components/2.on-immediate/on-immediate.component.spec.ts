import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnImmediateComponent } from './on-immediate.component';

describe('OnImmediateComponent', () => {
  let component: OnImmediateComponent;
  let fixture: ComponentFixture<OnImmediateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnImmediateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnImmediateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
