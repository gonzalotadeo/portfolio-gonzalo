import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';

/**
 * @title Basic cards
 */
@Component({
  standalone: true, // ✅ esto es necesario si estás usando imports en el componente
  selector: 'card-overview-example',
  templateUrl: './herramientas.component.html',
  imports: [MatCardModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardOverviewExample {}
