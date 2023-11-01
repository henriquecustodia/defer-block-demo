import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeferredComponent } from '../deferred/deferred.component';

@Component({
  selector: 'app-when-visible',
  standalone: true,
  imports: [DeferredComponent],
  templateUrl: './when-visible.component.html',
  styleUrls: ['./when-visible.component.scss'],
})
export class WhenVisibleComponent {
  isVisible = false;
}
