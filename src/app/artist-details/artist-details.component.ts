import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html'
})
export class ArtistDetailsComponent implements OnInit {
  // name : string;
  @Input() artist : any;
  constructor() {
  }

  ngOnInit(): void {
  }

}