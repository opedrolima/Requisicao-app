import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequisicaoRoutingModule } from './requisicao-routing.module';

import { RequisicaoComponent } from './requisicao.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MovimentacaoModule } from '../movimentacao/movimentacao.module';
import { ListaModule } from '../movimentacao/lista/lista.module';

@NgModule({
  declarations: [RequisicaoComponent],
  imports: [
    CommonModule,
    RequisicaoRoutingModule,
    NgSelectModule,
    DialogModule,
    ReactiveFormsModule,
    MovimentacaoModule,
    ListaModule
  
  ]
})
export class RequisicaoModule { }
