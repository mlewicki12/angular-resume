import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'resume-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  page: string = '';

  constructor(private location: Location) { }

  ngOnInit(): void {
    this.location.onUrlChange(val => {
      const page = val.substring(1).split('/')[0];
      this.page = page.charAt(0).toUpperCase() + page.substring(1);
    });
  }

}
