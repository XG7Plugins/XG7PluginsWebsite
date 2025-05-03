import { Component } from '@angular/core';
import {ModalComponent} from '../utils/modal/modal.component';
import {ImgComponent} from '../utils/img/img.component';
import {NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-plugin-modal',
  imports: [
    ModalComponent,
    ImgComponent,
    NgIf,
    RouterLink
  ],
  templateUrl: './plugin-modal.component.html',
  styleUrl: './plugin-modal.component.css'
})
export class PluginModalComponent {

}
