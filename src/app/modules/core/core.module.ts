import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { PreferencesScreenComponent } from './components/preferences-screen/preferences-screen.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    CoreComponent,
    HelloWorldComponent,
    PreferencesScreenComponent,
    TutorialComponent,
    AboutComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [
    CoreComponent,
    HelloWorldComponent,
    PreferencesScreenComponent,
    TutorialComponent,
    AboutComponent,
    ProjectsComponent,
  ],
})
export class CoreModule { }
