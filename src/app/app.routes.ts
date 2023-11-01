import { Routes } from '@angular/router';
import { WhenVisibleComponent } from './components/1.when-visible/when-visible.component';
import { OnImmediateComponent } from './components/2.on-immediate/on-immediate.component';
import { OnIdleComponent } from './components/3.on-idle/on-idle.component';
import { OnInteractionComponent } from './components/4.on-interaction/on-interaction.component';
import { OnHoverComponent } from './components/5.on-hover/on-hover.component';
import { OnTimerComponent } from './components/6.on-timer/on-timer.component';
import { OnViewPortComponent } from './components/7.on-view-port/on-view-port.component';

export const routes: Routes = [
  {
    path: 'when-visible',
    component: WhenVisibleComponent,
  },
  {
    path: 'on-immediate',
    component: OnImmediateComponent,
  },
  {
    path: 'on-Idle',
    component: OnIdleComponent,
  },
  {
    path: 'on-interaction',
    component: OnInteractionComponent,
  },
  {
    path: 'on-hover',
    component: OnHoverComponent,
  },
  {
    path: 'on-timer',
    component: OnTimerComponent,
  },
  {
    path: 'on-viewport',
    component: OnViewPortComponent,
  },
];
