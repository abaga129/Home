import { Component } from '@angular/core';
import { GitProject } from './git-project/gitproject';
import { Plugin } from './plugin-project/plugin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  projects: GitProject[] =
  [
    {
      name: "Ddsp",
      desc: "A high level Digital Signal Processing library written in D",
      projectURL: "https://github.com/ctrecordings/Ddsp"
    },
    {
      name: "lib_dsp",
      desc: "A small Digital Signal Processing library for C++ applications",
      projectURL: "https://github.com/abaga129/lib_dsp"
    },
    {
      name: "EasyGPIO",
      desc: "Client/Server application for easily controlling Rasperry Pi GPIO remotely",
      projectURL: "https://github.com/abaga129/EasyGPIO"
    },
    {
      name: "EasyGPIO",
      desc: "Client/Server application for easily controlling Rasperry Pi GPIO remotely",
      projectURL: "https://github.com/abaga129/EasyGPIO"
    }
  ]

  plugins: Plugin[] =
  [
    {
      name: "EpicPress",
      desc: "Stereo Cross-over Delay",
      imageURL: "assets/epicpress.png"
    },
    {
      name: "M4 Multiband Compressor",
      desc: "Stereo Cross-over Delay",
      imageURL: "assets/m4.png"
    },
    {
      name: "Entropy II",
      desc: "Stereo Cross-over Delay",
      imageURL: "assets/entropyii.png"
    }
  ]

}
