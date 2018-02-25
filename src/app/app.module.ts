import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
