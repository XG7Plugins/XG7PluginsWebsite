import {Component, Input, OnInit} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-img',
  imports: [
    NgClass
  ],
  templateUrl: './img.component.html',
  styleUrl: './img.component.css'
})
export class ImgComponent implements OnInit {
  @Input() src: string = ''; // URL da imagem
  @Input() alt: string = 'Imagem'; // Texto alternativo
  @Input() width: string = '100%'; // Largura opcional
  @Input() height: string = 'auto'; // Altura opcional
  @Input() styles: string = "";
  @Input() classes: string = "";

  isLoading = true; // Controle de carregamento

  constructor() {}

  ngOnInit(): void {
    if (/^\d+$/.test(this.width)) {
      this.width += 'px';
    }

    if (/^\d+$/.test(this.height)) {
      this.height += 'px';
    }
  }
  onLoad() {
    this.isLoading = false; // Quando a imagem carregar, esconde o loader
  }

  parseStyle(style: string): { [key: string]: string } {
    return style
      .split(';')
      .filter(s => s.trim())
      .map(s => s.split(':'))
      .reduce((acc, [key, value]) => {
        if (key && value) {
          acc[key.trim()] = value.trim();
        }
        return acc;
      }, {} as any);
  }
}
