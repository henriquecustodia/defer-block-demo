import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeferredComponent } from '../deferred/deferred.component';

@Component({
  selector: 'app-on-hover',
  standalone: true,
  imports: [DeferredComponent],
  templateUrl: './on-hover.component.html',
  styleUrls: ['./on-hover.component.scss']
})
export class OnHoverComponent {

}
