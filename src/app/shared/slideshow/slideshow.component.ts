import { OnInit, AfterViewInit, Component, Input } from '@angular/core';
import { Libro } from 'src/app/libros/libro';

// import Swiper bundle with all modules installed
import Swiper from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  @Input() public libros: Libro[];

  swiper: Swiper;

  ngOnInit(): void {
    console.log(this.libros);
  }

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper', {
      // // Optional parameters
      // direction: 'vertical',
      loop: true,

      // // If we need pagination
      // pagination: {
      //   el: '.swiper-pagination',
      // },

      // // Navigation arrows
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },

      // // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    });
  }

  onSlideNext(){
    this.swiper.slideNext();
  }

  onSlidePrev(){
    this.swiper.slidePrev();
  }
}
