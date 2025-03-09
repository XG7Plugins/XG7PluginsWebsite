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

  isLoading = true; // Controle de carregamento

  constructor() {}

  ngOnInit(): void {}

  onLoad() {
    this.isLoading = false; // Quando a imagem carregar, esconde o loader
  }
}
