import { NgModule } from '@angular/core';

import { DepartamentoRoutingModule } from './departamento-routing.module';
import { DepartamentoComponent } from './departamento.component';
import { ComumModule } from 'src/app/modules/comum.module';
import { ReactiveFormsModule } from '@angular/forms';

import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [DepartamentoComponent],
  imports: [
    DialogModule,
    ComumModule,
    ReactiveFormsModule,
    DepartamentoRoutingModule
  ]
})
export class DepartamentoModule { }