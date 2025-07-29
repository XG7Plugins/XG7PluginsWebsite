import { Component } from '@angular/core';
import {PluginService} from '../../../../services/plugin/plugin.service';
import {FormsModule} from '@angular/forms';
import {DashboardFooterComponent} from '../dashboard-footer/dashboard-footer.component';
import {NgForOf} from '@angular/common';
import {ImgComponent} from '../../../utils/img/img.component';
import {PluginModalComponent} from '../../../plugins/plugin-modal/plugin-modal.component';
import {CreatePluginsComponent} from '../../../plugins/create-plugins/create-plugins.component';
import {EditPluginsComponent} from '../../../plugins/edit-plugins/edit-plugins.component';
import {UpdatePluginsComponent} from '../../../plugins/update-plugins/update-plugins.component';

@Component({
  selector: 'app-plugins',
  imports: [
    FormsModule,
    DashboardFooterComponent,
    NgForOf,
    PluginModalComponent,
    CreatePluginsComponent,
    EditPluginsComponent,
    UpdatePluginsComponent
  ],
  templateUrl: './plugins.component.html',
  styleUrl: './plugins.component.css'
})
export class PluginsComponent {

  pesquisa: string = '';

  constructor(
    protected pluginService: PluginService,
  ) { }

  getPlugins() {
    return this.pluginService.getPlugins().filter(plugin => plugin.name.toLowerCase().includes(this.pesquisa.toLowerCase()));
  }

}
