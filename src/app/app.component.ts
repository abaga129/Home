import { Component, ViewChild } from '@angular/core';
import { GitProject } from './git-project/gitproject';
import { Plugin } from './plugin-project/plugin';
import { MatExpansionPanel } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() 
  {
    
  }

  @ViewChild('projectsPanel') projectsPanel : MatExpansionPanel;

  expandPanels() {
    this.projectsPanel.open();
  }

  title = 'app';

  projects: GitProject[] =
  [
    {
      name: "Ddsp",
      desc: "A high level Digital Signal Processing library written in D.  This library implements various BiQuad filters, audio effects (Digital Delay, Chorus, Saturation, etc), and oscillators.  The library also includes useful classes and templates for working in a @nogc environment.",
      projectURL: "https://github.com/ctrecordings/Ddsp"
    },
    {
      name: "lib_dsp",
      desc: "A small Digital Signal Processing library for C++ applications.  The library implements filters, delays, and other effects.  It can be compiled to a shared library or included directly into your audio application.  The aim of lib_dsp is to simplify WDL plugin development.",
      projectURL: "https://github.com/abaga129/lib_dsp"
    },
    {
      name: "EasyGPIO",
      desc: "Client/Server application for easily controlling Rasperry Pi GPIO remotely.  The client can be run on an Windows computer that has .NET or any unix computer that has mono installed.  The server is a python program that listens for connections from the client via sockets.  The two devices continously synchronize data to display the current status of the GPIO pins and to update them remotely.",
      projectURL: "https://github.com/abaga129/EasyGPIO"
    },
    {
      name: "Dplug",
      desc: "D library for creating VST, AU, and AAX plugins for Windows, Mac OS, and Linux. I work on linux support, flat-widgets, and small fixes for the library.",
      projectURL: "https://github.com/abaga129/dplug"
    }
  ]

  plugins: Plugin[] =
  [
    {
      name: "EpicPress",
      desc: "Stereo compressor with controls for Attack, Release, Knee, Mix, and Gain.  EpicPress has a unique display that plots input vs output in real time.",
      imageURL: "assets/epicpress.png",
      projectURL: "http://www.modernmetalproduction.com/epiccomp-coming-soon/"
    },
    {
      name: "M4 Multiband Compressor",
      desc: "M4 is a multiband stereo compressor.  It features 4 bands that can be set by the user.  Each band can be soloed dial in the attack/release times and also has a display that shows input, output, and gain reduction.",
      imageURL: "assets/m4.png",
      projectURL: "http://www.modernmetalproduction.com/product/m4-multiband-compressor-vst-au/"
    },
    {
      name: "Entropy II",
      desc: "Stereo Cross-over Delay.  Entropy II improves on the original design from Entropy v1 by adding filters and saturation on the feedback loop, and also allows the delay time to be synced to the tempo.",
      imageURL: "assets/entropyii.png",
      projectURL: "http://www.modernmetalproduction.com/product/entropy-ii-enhanced-stereo-delay-vst-au/"
    },
    {
      name: "POP Sound Shaper",
      desc: "Compressor and Clipper combo with high-end and low-end boost.  POP has a display that plots input vs output over time for each channel separately.",
      imageURL: "assets/popss.png",
      projectURL: "http://www.modernmetalproduction.com/product/pop-sound-shaper-vst-au/"
    } 
  ]

}
