import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatToolbarModule, MatIconModule} from '@angular/material'
import {MatButtonModule} from '@angular/material/button';



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
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
