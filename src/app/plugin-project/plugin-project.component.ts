import { Component, OnInit, Input } from '@angular/core';
import { Plugin } from './plugin';

@Component({
  selector: 'app-plugin-project',
  templateUrl: './plugin-project.component.html',
  styleUrls: ['./plugin-project.component.css']
})
export class PluginProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() plugin: Plugin;

}
