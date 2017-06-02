import {trigger, state, animate, style, transition} from '@angular/core';

export function stretch() {
  return trigger('stretch', [
    state('false', style({}) ),
    state('true', style({height: '40vh'}) ),
    transition('false => true', [
      animate('1s')
    ])
  ]);
}
