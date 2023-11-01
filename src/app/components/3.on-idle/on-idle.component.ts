import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeferredComponent } from '../deferred/deferred.component';

@Component({
  selector: 'app-on-idle',
  standalone: true,
  imports: [DeferredComponent],
  templateUrl: './on-idle.component.html',
  styleUrls: ['./on-idle.component.scss']
})
export class OnIdleComponent {

}
