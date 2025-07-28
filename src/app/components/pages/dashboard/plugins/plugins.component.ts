import { Component } from '@angular/core';
import {PluginService} from '../../../../services/plugin/plugin.service';
import {FormsModule} from '@angular/forms';
import {DashboardFooterComponent} from '../dashboard-footer/dashboard-footer.component';
import {NgForOf} from '@angular/common';
import {ImgComponent} from '../../../utils/img/img.component';

@Component({
  selector: 'app-plugins',
  imports: [
    FormsModule,
    DashboardFooterComponent,
    NgForOf
  ],
  templateUrl: './plugins.component.html',
  styleUrl: './plugins.component.css'
})
export class PluginsComponent {

  constructor(
    protected pluginService: PluginService,
  ) { }

  protected pesquisa = '';

  getPlugins() {
    return this.pluginService.getPlugins();
  }

}
