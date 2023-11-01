import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeferredComponent } from '../deferred/deferred.component';

@Component({
  selector: 'app-on-interaction',
  standalone: true,
  imports: [DeferredComponent],
  templateUrl: './on-interaction.component.html',
  styleUrls: ['./on-interaction.component.scss']
})
export class OnInteractionComponent {

}
