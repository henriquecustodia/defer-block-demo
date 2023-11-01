import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeferredComponent } from '../deferred/deferred.component';

@Component({
  selector: 'app-on-view-port',
  standalone: true,
  imports: [DeferredComponent],
  templateUrl: './on-view-port.component.html',
  styleUrls: ['./on-view-port.component.scss']
})
export class OnViewPortComponent {

}
