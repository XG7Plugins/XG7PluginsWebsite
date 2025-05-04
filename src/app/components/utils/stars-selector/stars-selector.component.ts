import {Component, Input} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-stars-selector',
  imports: [
    NgForOf
  ],
  templateUrl: './stars-selector.component.html',
  styleUrl: './stars-selector.component.css'
})
export class StarsSelectorComponent {

  @Input() initialRating: string = "";

  selectedRating = Number(this.initialRating);
  hoverRating = Number(this.initialRating);

  onHover(event: MouseEvent, star: number) {
    const target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const percent = offsetX / rect.width;
    this.hoverRating = star - 1 + percent;
  }

  setRating(value: number) {
    this.selectedRating = Math.round(value * 10) / 10;
  }

  getFillPercent(star: number): number {
    const rating = this.hoverRating || this.selectedRating;
    if (rating >= star) return 100;
    if (rating + 1 > star) return (rating - (star - 1)) * 100;
    return 0;
  }

}
