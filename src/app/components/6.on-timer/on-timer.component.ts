import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeferredComponent } from '../deferred/deferred.component';

@Component({
  selector: 'app-on-timer',
  standalone: true,
  imports: [DeferredComponent],
  templateUrl: './on-timer.component.html',
  styleUrls: ['./on-timer.component.scss']
})
export class OnTimerComponent {

}
