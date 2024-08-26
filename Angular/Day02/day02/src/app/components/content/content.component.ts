import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  trackName: string = 'PHP Track';
  flag: boolean = true;
  imgSrc1: string = '1.jpg';
  imgSrc2: string = '2.jpg';
  showData() {
    this.imgSrc1 = 'images/2.jpg';
  }
}
