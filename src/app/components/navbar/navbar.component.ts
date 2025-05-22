import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // window.addEventListener('scroll', () => {
    //   if (window.scrollY > 0) {
    //     document.querySelector('.navbar_container').classList.add('scrolled');
    //   } else {
    //     document.querySelector('.navbar_container').classList.remove('scrolled');
    //   }
    // });
  }

}
