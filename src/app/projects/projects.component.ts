import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public safeURL!: SafeResourceUrl;
  public safeURL2!: SafeResourceUrl;

  constructor(private _sanitizer: DomSanitizer) { 
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/B1dTDlM0th4');
    this.safeURL2 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/kaeEJ8SCnSg');
  }

  ngOnInit(): void {
  }

}
