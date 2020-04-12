import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  slideBottom,
  scrollSide,
  slideTop,
  rotateSx, leftUp, rightUp, rotateDx, flip, fadeBack
} from '../../../uit-routing-animation-lib/src/public-api';
import {SlideBottomComponent} from './loading/slide-bottom/slide-bottom.component';
import {ScrollSideComponent} from './loading/scroll-side/scroll-side.component';
import {SlideTopComponent} from './loading/slide-top/slide-top.component';
import {RotateSxComponent} from './loading/rotate-sx/rotate-sx.component';
import {LeftUpComponent} from './loading/left-up/left-up.component';
import {RightUpComponent} from './loading/right-up/right-up.component';
import {RotateDxComponent} from './loading/rotate-dx/rotate-dx.component';
import {FlipComponent} from './loading/flip/flip.component';
import {FadeBackComponent} from './loading/fade-back/fade-back.component';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  animations: [
    slideBottom,
    scrollSide,
    slideTop,
    rotateSx,
    leftUp,
    rightUp,
    rotateDx,
    flip,
    fadeBack
  ]
})

export class AppComponent {
  animationSelected = FadeBackComponent;
  @HostBinding('@.disabled')
  public animationsDisabled = false;

  assignComponent(component) {
    switch (component) {
      case 'slideBottom': {
        this.animationSelected = SlideBottomComponent;
        break;
      }
      case 'scrollSide': {
        this.animationSelected = ScrollSideComponent;
        break;
      }
      case 'slideTop': {
        this.animationSelected = SlideTopComponent;
        break;
      }
      case 'rotateSx': {
        this.animationSelected = RotateSxComponent;
        break;
      }
      case 'rotateDx': {
        this.animationSelected = RotateDxComponent;
        break;
      }
      case 'leftUp': {
        this.animationSelected = LeftUpComponent;
        break;
      }
      case 'rightUp': {
        this.animationSelected = RightUpComponent;
        break;
      }
      case 'flip': {
        this.animationSelected = FlipComponent;
        break;
      }
      case 'fadeBack': {
        this.animationSelected = FadeBackComponent;
        break;
      }
    }
  }
  toggleAnimations() {
    this.animationsDisabled = !this.animationsDisabled;
  }
}
