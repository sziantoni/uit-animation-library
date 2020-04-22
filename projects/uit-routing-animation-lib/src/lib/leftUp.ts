const ROUTING_ELEMENT = 'route-animations-elements';
import {
  trigger,
  transition,
  style,
  query,
  animate,
  sequence, stagger, keyframes, AnimationTriggerMetadata, useAnimation, animation,
} from '@angular/animations';

const leftUp = animation([
      query(':enter .' + ROUTING_ELEMENT , style({
        opacity: 0
      }) , {optional: true}),
      query(':enter' , style({
        opacity: 0,
        position: 'fixed'
      }) , {optional: true}),
        sequence([
        query(':leave', [
          style({ transform: 'translateX(0%) translateY(0)', opacity: 1, flex: 'inherit'}),
          stagger( 300, [
          animate('{{leaveT}}s {{leaveD}}s ease-in', keyframes([
              style({transform: 'translateX(0%) translateY(0%) scaleY(1) scaleX(1)',  opacity: 1,  offset: 0.1}),
              style({ transform: 'translateX(-50%) translateY(0%) scaleY(0.6) scaleX(0.6)' ,  opacity: 0.5,  offset: 0.6}),
              style({ transform: 'translateX(-50%) translateY(-50%) scaleY(0.5) scaleX(0.5)',   opacity: 0.4,  offset: 0.7 }),
              style({ transform: 'translateX(-50%) translateY(-100%) scaleY(0.4) scaleX(0.4)', opacity: 0,  offset: 1,  })
            ])
          ) ,
            style({position: 'fixed'})
          ] )], {optional: true} ),
        query(':enter' , [
          style({ transform: 'translateX(-50%) translateY(-100%)',  opacity: 0}),
          stagger(100, [
          animate( '{{enterT}}s {{enterT}}s ease-out' , keyframes([
            style({transform: 'translateX(-50%) translateY(-75%) scaleY(0.4) scaleX(0.4)',  opacity: 0.1,  offset: 0.1}),
            style({transform: 'translateX(-50%) translateY(-50%) scaleY(0.5) scaleX(0.5)', opacity: 0.2,  offset: 0.2 } ),
            style({ transform: 'translateX(-50%) translateY(0%) scaleY(0.6) scaleX(0.6)',   opacity: 0.3,  offset: 0.3 }),
            style({ transform: 'translateX(0%) translateY(0%) scaleY(1) scaleX(1)', opacity: 1, position: 'relative', offset: 1,  })
          ]))])
        ])]),
      query(
        '.' + ROUTING_ELEMENT,
        stagger(150, [
          style({ transform: 'translateX(-50%) translateY(-100%)',  opacity: 0, flex: 'inherit'}),
          animate(
            '{{enterTR}}s {{enterDR}}s ease-out', keyframes([
              style({transform: 'translateX(-50%) translateY(-50%) scaleY(0.4) scaleX(0.4)',  opacity: 0.1,  offset: 0.1}),
              style({ transform: 'translateX(-50%) translateY(0%) scaleY(0.7) scaleX(0.7)', opacity: 0.5,  offset: 0.4}),
              style({ transform: 'translateX(0%) translateY(0%) scaleY(1) scaleX(1)', opacity: 1, offset: 1,  })
            ])

          )
        ]),
        { optional: true }
      )]);


export function leftUp_setParametres(
  entert: string ,
  enterd: string,
  leavet: string,
  leaved: string,
  entertr: string,
  enterdr: string): AnimationTriggerMetadata {
  return trigger('leftUp', [
    transition('* <=> *', useAnimation(leftUp), {params: {
        enterT: entert,
        leaveT: leavet,
        enterD: enterd,
        leaveD: leaved,
        enterTR: entertr,
        enterDR: enterdr} })
  ]);
}

export function leftUpAnimation(): AnimationTriggerMetadata {
  return trigger('leftUp', [
    transition('* <=> *', useAnimation(leftUp), {params: {
        enterT: '0.6',
        leaveT: '0.6',
        enterD: '0',
        leaveD: '0',
        enterTR: '0.6',
        enterDR: '0'} })
  ]);
}
