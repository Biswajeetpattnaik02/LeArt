import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

@Component({
  selector: 'app-cover-flow',
  templateUrl: './cover-flow.component.html',
  styleUrls: ['./cover-flow.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CoverFlowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
