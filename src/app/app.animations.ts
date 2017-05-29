import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export function arrowAnimation() {
  return trigger('arrowState', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active',   style({
        background: 'linear-gradient(rgba(20,20,20, .5),rgba(20,20,20, .5))',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ]);
}


