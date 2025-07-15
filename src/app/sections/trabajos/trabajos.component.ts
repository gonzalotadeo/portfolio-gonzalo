import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-trabajos',
  standalone: true,
  imports: [NgIf],
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.scss']
})
export class TrabajosComponent {
  descripcionVisible: boolean[] = [false, false, false]; 

  toggleDescripcion(index: number): void {
    this.descripcionVisible[index] = !this.descripcionVisible[index];
  }
}
