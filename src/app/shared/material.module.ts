// material.module.ts
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
// importa más módulos según necesites

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
