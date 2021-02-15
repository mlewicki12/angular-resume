import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'resume-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  page: string = '';
  routeMap: {[key: string] : string} = {
    "/about": "About Me",
    "/education": "Education",
    "/experience": "Experience",
    "/projects": "Projects",
    "/hobbies": "Hobbies"
  };

  constructor(private location: Location) { }

  ngOnInit(): void {
    this.location.onUrlChange(val => {
      this.page = this.routeMap[val];
    });
  }

}
