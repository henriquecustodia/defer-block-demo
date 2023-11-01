import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeferredComponent } from '../deferred/deferred.component';

@Component({
  selector: 'app-on-immediate',
  standalone: true,
  imports: [DeferredComponent],
  templateUrl: './on-immediate.component.html',
  styleUrls: ['./on-immediate.component.scss'],
})
export class OnImmediateComponent {}
