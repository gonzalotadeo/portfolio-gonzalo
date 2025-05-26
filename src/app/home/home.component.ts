import { Component } from '@angular/core';
import { HeaderComponent } from '../sections/header/header.component'
import { HeroComponent } from '../sections/hero/hero.component';
import { ProjectsComponent } from '../sections/projects/projects.component';
import { StackComponent } from '../sections/stack/stack.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-home',
  standalone: true, // 👈 necesario en standalone
    imports: [
    HeaderComponent,
    HeroComponent,
    ProjectsComponent,
    MatSlideToggleModule
  ],    // aquí puedes añadir otros componentes si los necesitas
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] // 👈 en plural y como array
})
export class HomeComponent {}

