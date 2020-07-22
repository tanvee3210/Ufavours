import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  slideOpts1 = {
    initialSlide: 1,
    slidesPerView: 5,
    speed: 400,
    loop: true,
    spaceBetween: 0,
    autoplay: true
  };
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onFilter() {
    this.router.navigate(['/', 'search'])
  }


  sliderImages1 = [
    {
      img: "assets/images/Ufavoursimages/001.png",
      id: 1,
      title: 'Pizza'
    },
    {
      img: "assets/images/Ufavoursimages/002.png",
      id: 2,
      title: 'Burger',
    },
    {
      img: "assets/images/Ufavoursimages/003.png",
      id: 3,
      title: 'Snacks',
    },
    {
      img: "assets/images/Ufavoursimages/004.png",
      id: 4,
      title: 'Sweets',

    },
    {
      img: "assets/images/Ufavoursimages/005.png",
      id: 5,
      title: 'Chinese',
    }
  ];
}
