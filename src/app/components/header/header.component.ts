import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadCV() {
    const url = 'assets/CV_Luis_Gomez_2025.pdf';
    window.open(url, '_blank');
  }

}
