import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Departamento } from 'src/app/models/departamento.model';
import { Funcionario } from 'src/app/models/funcionario.model';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import Swal from 'sweetalert2';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  funcionarios$: Observable<Funcionario[]>;
  departamentos$: Observable<Departamento[]>;
  departamentoFiltro: string;
  edit: boolean;
  displayDialogFuncionario: boolean;
  form: FormGroup;


  constructor(private funcionarioService: FuncionarioService, private departamentoService: DepartamentoService, private fb: FormBuilder) { }

  ngOnInit() {
    
    this.funcionarios$= this.funcionarioService.list();
    this.departamentos$= this.departamentoService.list();
    this.departamentoFiltro = 'TODOS';
    this.configForm();

  
  }

  configForm() {
    this.form = this.fb.group({
      id: new FormControl(),
      nome: new FormControl('', Validators.required),
      email: new FormControl('',[Validators.required, Validators.email]),
      funcao: new FormControl(''),
      departamentoId: new FormControl('', Validators.required)
    
    })
  }
    add() {
    this.form.reset();
    this.edit = false;
    this.displayDialogFuncionario = true;
  }

  selecionaFuncionario(func: Funcionario) {
    this.edit = true;
    this.displayDialogFuncionario = true;
    this.form.setValue(func);
  }

  save() {
    this.funcionarioService.createOrUpdate(this.form.value)
      .then(() => {
        this.displayDialogFuncionario = false;
        Swal.fire(`Funcionário ${!this.edit ? 'salvo' : 'atualizado'} com sucesso.`, '', 'success')
        this.displayDialogFuncionario = false;
      })
      .catch((erro) => {
        this.displayDialogFuncionario = true;
        Swal.fire(`Erro ao ${!this.edit ? 'salvo' : 'atualizado'} o Funcionário.`, `Detalhes: ${erro}`, 'error')
      })
    this.form.reset()
  }

  delete(depto: Funcionario) {
    Swal.fire({
      title: 'Confirma a exclusão do Funcionário?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((result) => {
      if (result.value) {
        this.funcionarioService.delete(depto.id)
          .then(() => {
            Swal.fire('Funcionario excluído com sucesso!', '', 'success')
          })
      }
    })
  }

}
