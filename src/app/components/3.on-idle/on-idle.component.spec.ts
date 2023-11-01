import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnIdleComponent } from './on-idle.component';

describe('OnIdleComponent', () => {
  let component: OnIdleComponent;
  let fixture: ComponentFixture<OnIdleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnIdleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnIdleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
