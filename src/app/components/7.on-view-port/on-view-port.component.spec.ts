import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnViewPortComponent } from './on-view-port.component';

describe('OnViewPortComponent', () => {
  let component: OnViewPortComponent;
  let fixture: ComponentFixture<OnViewPortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnViewPortComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnViewPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
