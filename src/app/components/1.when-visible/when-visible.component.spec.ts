import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhenVisibleComponent } from './when-visible.component';

describe('WhenVisibleComponent', () => {
  let component: WhenVisibleComponent;
  let fixture: ComponentFixture<WhenVisibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhenVisibleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhenVisibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
