import { Component, OnInit, Input } from '@angular/core';
import { GitProject } from './gitproject';

@Component({
  selector: 'app-git-project',
  templateUrl: './git-project.component.html',
  styleUrls: ['./git-project.component.css']
})
export class GitProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() project: GitProject
}
