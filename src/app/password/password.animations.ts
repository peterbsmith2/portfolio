import {trigger, state, animate, style, transition} from '@angular/core';

export function slideOut() {
  return trigger('slideOut', [
    state('void', style({}) ),
    state('*', style({}) ),
    transition(':enter', [
      style({transform: 'translateY(100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
    ])
  ]);
}
