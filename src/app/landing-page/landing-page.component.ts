import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  name:String = "Gideon's";
  opened = true;

  toggleSidebar() {
    this.opened = !this.opened;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
