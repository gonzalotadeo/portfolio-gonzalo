import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-herramientas',
  standalone: true,
  imports: [],
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.scss'],
})
export class HerramientasComponent implements AfterViewInit {
  @ViewChild('stackSection', { static: true }) stackSection!: ElementRef;
  private platformId = inject(PLATFORM_ID);

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // Solo ejecutar si es navegador
    if (!isPlatformBrowser(this.platformId)) return;

    
const sectionElement = this.stackSection.nativeElement as HTMLElement;

const cards = this.stackSection.nativeElement.querySelectorAll('.card');


    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          cards.forEach((card: HTMLElement, index: number) => {
            setTimeout(() => {
              this.renderer.addClass(card, 'visible');
            }, index * 200);
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.4 });

    observer.observe(this.stackSection.nativeElement);
  }
}
