import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-stars',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.css'
})
export class StarsComponent {

  @Input() stars: string = "0";
  @Input() classes: string = "";


  get fullStars() {
    return Array(Math.floor(Number(this.stars)));
  }

  get hasHalfStar() {
    return Number(this.stars) % 1 >= 0.5;
  }

  get emptyStars() {
    const total = 5;
    return Array(total - Math.ceil(Number(this.stars)));
  }
}
