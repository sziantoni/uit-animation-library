import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {flip} from 'uit-routing-animation-lib';

@Component({
  selector: 'app-flip',
  templateUrl: './flip.component.html',
  styleUrls: ['./flip.component.css'],
  animations: [ flip]
})
export class FlipComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
