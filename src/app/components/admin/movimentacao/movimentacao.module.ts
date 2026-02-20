import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovimentacaoRoutingModule } from './movimentacao-routing.module';
import { MovimentacaoComponent } from './movimentacao.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaModule } from './lista/lista.module';




@NgModule({
  declarations: [MovimentacaoComponent],
  imports: [
    CommonModule,
    MovimentacaoRoutingModule,
    NgSelectModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
    ListaModule

  ],
  exports: [MovimentacaoComponent]
})
export class MovimentacaoModule { }
