const ROUTING_ELEMENT = 'route-animations-elements';

import {
  trigger,
  transition,
  style,
  query,
  animate,
  sequence, stagger, animation, AnimationTriggerMetadata, useAnimation,
} from '@angular/animations';

const slideBottom = animation([
      query(':enter > *', [
        style({
          position: 'fixed',
          opacity: 0
        }) ,
      ] , {
        optional: true
      }),
      query(':enter .' + ROUTING_ELEMENT, style({ opacity: 0}), {
        optional: true
      }),
      sequence([
        query(':leave > *', [
          style({ opacity: 1, transform: 'translateY(0%)' }),
          animate('{{leaveT}}s {{leaveD}}s ease-in-out',
            style({ transform: 'translateY(-30%)', opacity: 0}) ),
          style({position: 'fixed'})
        ] , {
          optional: true
        }),
        query(':enter > *', [
          style({transform: 'translateY(-30%)', opacity: 0, position: 'static' }),
          animate(
            '{{enterT}}s {{enterD}}s ease-in-out',
            style({ transform: 'translateY(0%)', opacity: 1 })
          )
        ] , {
          optional: true
        })]),
      query(
        '.' + ROUTING_ELEMENT,
        stagger(75, [
          style({ transform: 'translateY(-30%)', opacity: 0 }),
          animate(
            '{{enterTR}}s {{enterDR}}s ease-in-out',
            style({ transform: 'translateY(0%)', opacity: 1 })
          )
        ]),
        { optional: true }
      )]);




export function slideBottomAnimation_setParametres(
  entert: string ,
  enterd: string,
  leavet: string,
  leaved: string,
  entertr: string,
  enterdr: string): AnimationTriggerMetadata {
  return trigger('slideBottom', [
    transition('* <=> *', useAnimation(slideBottom), {params: {
        enterT: entert,
        leaveT: leavet,
        enterD: enterd,
        leaveD: leaved,
        enterTR: entertr,
        enterDR: enterdr} })
  ]);
}

export function slideBottomAnimation(): AnimationTriggerMetadata {
  return trigger('slideBottom', [
    transition('* <=> *', useAnimation(slideBottom), {params: {
        enterT: '0.5',
        leaveT: '0.3',
        enterD: '0',
        leaveD: '0',
        enterTR: '0.5',
        enterDR: '0'} })
  ]);
}
