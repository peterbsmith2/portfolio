import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export function flipAnimation() {
  return trigger('flipState', [
      state('*', style({
        'transform-style': 'preserve-3d',
        'opacity': 1,
        'backface-visibility': 'hidden',
        transform: 'rotateY(0deg)'
      })),
      state('void',   style({
        'transform-style': 'preserve-3d',
        'opacity': 0,
        'backface-visibility': 'hidden',
        transform: 'rotateY(180deg)'
      })),
      transition(':enter, :leave', animate('600ms'))
    ]);
}


