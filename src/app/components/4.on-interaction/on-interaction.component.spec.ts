import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnInteractionComponent } from './on-interaction.component';

describe('OnInteractionComponent', () => {
  let component: OnInteractionComponent;
  let fixture: ComponentFixture<OnInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnInteractionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
