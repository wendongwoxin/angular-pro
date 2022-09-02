import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {
  navbarOpen = false;
  constructor() { }

  ngOnInit(): void {
  }
  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }
}
