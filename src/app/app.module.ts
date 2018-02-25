import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Material
import {MatCardModule} from '@angular/material'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { GitProjectComponent } from './git-project/git-project.component';
import { PluginProjectComponent } from './plugin-project/plugin-project.component';


@NgModule({
  declarations: [
    AppComponent,
    GitProjectComponent,
    PluginProjectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
