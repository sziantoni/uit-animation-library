const ROUTING_ELEMENT = 'route-animations-elements';
const ROUTING_ELEMENT_SECOND_LEVEL = 'route-animations-elements-2-level';
import {
  trigger,
  transition,
  style,
  query,
  animate,
  sequence, stagger, keyframes, group,
} from '@angular/animations';

export const leftUp =
  trigger('leftUp', [
    transition('* <=> *', [
      query(':enter > * :leave > *', style({
        width: 'auto'
      }), { optional: true}),
      query(':enter .' + ROUTING_ELEMENT , style({
        opacity: 0
      }) , {optional: true}),
      query(':enter > *' , style({
        opacity: 0
      }) , {optional: true}),
        sequence([
        query(':leave > * ', [
          style({ transform: 'translateX(0%) translateY(0)',  position : ' initial', opacity: 1}),
          stagger( 300, [
          animate('{{leaveT}}s {{leaveD}}s cubic-bezier(.77, .06, .10, 1)', keyframes([
            // tslint:disable-next-line:max-line-length
              style({transform: 'translateX(0%) translateY(0) scaleY(1) scaleX(1)',  position : ' initial',  opacity: 1,  offset: 0.1}),
              // tslint:disable-next-line:max-line-length
              style({ transform: 'translateX(-50%) translateY(0%) scaleY(0.6) scaleX(0.6)' ,  opacity: 0.5, position : ' initial' ,  offset: 0.6}),
              // tslint:disable-next-line:max-line-length
              style({ transform: 'translateX(-60%) translateY(-50%) scaleY(0.5) scaleX(0.5)',   opacity: 0.4, position : ' initial',  offset: 0.7 }),
            // tslint:disable-next-line:max-line-length
              style({ transform: 'translateX(-60%) translateY(-100%) scaleY(0.4) scaleX(0.4)', opacity: 0, position: 'initial', offset: 1,  })
            ])
          ),
            style({position: 'fixed'})
          ] )], {optional: true} ),
        query(':enter > *' , [
          style({ transform: 'translateX(-60%) translateY(-100%)',  opacity: 0}),
          stagger(100, [
          animate( '{{enterT}}s {{enterT}}s cubic-bezier(.77, .06, 1, 0)' , keyframes([
            // tslint:disable-next-line:max-line-length
            style({transform: 'translateX(-60%) translateY(-75%) scaleY(0.4) scaleX(0.4)',  position : ' initial',  opacity: 0.1,  offset: 0.1}),
            // tslint:disable-next-line:max-line-length
            style({transform: 'translateX(-60%) translateY(-50%) scaleY(0.5) scaleX(0.5)', opacity: 0.2, position : ' initial',  offset: 0.2 } ),
            // tslint:disable-next-line:max-line-length
            style({ transform: 'translateX(-55%) translateY(0%) scaleY(0.6) scaleX(0.6)',   opacity: 0.3, position : ' initial',  offset: 0.3 }),
            // tslint:disable-next-line:max-line-length
            style({ transform: 'translateX(0%) translateY(0%) scaleY(1) scaleX(1)', opacity: 1, position: 'initial', offset: 1,  })
          ]))])
        ])]),
      query(
        '.' + ROUTING_ELEMENT,
        stagger(150, [
          style({ transform: 'translateX(-60%) translateY(-100%)',  opacity: 0}),
          animate(
            '{{enterT}}s {{enterD}}s cubic-bezier(1, 0, 1, 0)', keyframes([
              // tslint:disable-next-line:max-line-length
              style({transform: 'translateX(-60%) translateY(-50%) scaleY(0.4) scaleX(0.4)',  position : ' initial',  opacity: 0.1,  offset: 0.1}),
              // tslint:disable-next-line:max-line-length
              style({ transform: 'translateX(-50%) translateY(0%) scaleY(0.7) scaleX(0.7)', opacity: 0.5, position : ' initial',  offset: 0.4}),
              // tslint:disable-next-line:max-line-length
              style({ transform: 'translateX(0%) translateY(0%) scaleY(1) scaleX(1)', opacity: 1, position: 'initial', offset: 1,  })
            ])

          )
        ]),
        { optional: true }
      )
    ], {params: {enterT: '0.7', leaveT: '0.5',  enterD: '0', leaveD: '0'} }),

  ]);