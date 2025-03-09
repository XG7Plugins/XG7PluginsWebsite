import {Component, OnInit} from '@angular/core';
import {PluginService} from '../../../services/plugin/plugin.service';
import {PrePlugin} from '../../../services/plugin/plugin';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-pluginpage',
  imports: [
    NgClass,
    NgForOf,
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './pluginpage.component.html',
  styleUrl: './pluginpage.component.css'
})
export class PluginpageComponent implements OnInit {

  loadedPlugins: PrePlugin[] = [];

  currentPage = 1;
  maxPages = 10;

  constructor(
    private pluginsService: PluginService
  ) {}

  ngOnInit(): void {
    this.pluginsService.getSomePrePlugins(10).subscribe(plugins => {
      this.loadedPlugins = plugins;
    });
  }


}
