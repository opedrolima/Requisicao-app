import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaRoutingModule } from './lista-routing.module';
import { ListaComponent } from './lista.component';
import {DialogModule } from 'primeng/dialog';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToolbarModule } from 'primeng/toolbar';


@NgModule({
  declarations: [ListaComponent],
  imports: [
    CommonModule,
    ListaRoutingModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    ToolbarModule,
  ],
  exports: [ListaComponent]
})
export class ListaModule { }
