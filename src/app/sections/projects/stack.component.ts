import { Component, NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    MatCardModule,
    // otros módulos
  ],
})
export class AppModule { }


@Component({
  selector: 'app-stack',
  imports: [],
  standalone: true, // 👈 necesario en standalone
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.scss'
})
export class StackComponent {

}
// src/app/home/home.component.ts
export class HomeComponent {
  projects = [
    { nombre: 'NOMBRE PROYECTO', tecnologias: 'Herramienta1 · Herramienta2 · Herramienta3' },
    { nombre: 'NOMBRE PROYECTO', tecnologias: 'Herramienta1 · Herramienta2 · Herramienta3' },
    { nombre: 'NOMBRE PROYECTO', tecnologias: 'Herramienta1 · Herramienta2 · Herramienta3' },
    { nombre: 'NOMBRE PROYECTO', tecnologias: 'Herramienta1 · Herramienta2 · Herramienta3' },
    { nombre: 'NOMBRE PROYECTO', tecnologias: 'Herramienta1 · Herramienta2 · Herramienta3' }
  ];
}
