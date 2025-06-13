import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stack',
  imports: [NgFor],
  standalone: true, // 👈 necesario en standalone
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.scss'
})
export class StackComponent {
projects: any;

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
