import { Component } from '@angular/core';

@Component({
  selector: 'app-tatrefas',
  templateUrl: './tatrefas.component.html',
  styleUrls: ['./tatrefas.component.css']
})
export class TatrefasComponent {
  contagemTarefas: number = 0
  tarefas = [
    { descricao: 'Tarefa 01', concluida: false },
    { descricao: 'Tarefa 02', concluida: false },
    { descricao: 'Tarefa 03', concluida: false },
    { descricao: 'Tarefa 04', concluida: false },
    { descricao: 'Tarefa 05', concluida: false }
  ];

  concluirTodas() {
    for (let tarefa of this.tarefas) {
      tarefa.concluida = true
    }
    this.atualizar()
  }
  refazerTodas() {
    for (let tarefa of this.tarefas) {
      tarefa.concluida = false
    }
    this.atualizar()
  }

  atualizar() {
    this.contagemTarefas = 0
    for (let tarefa of this.tarefas) {
      if (tarefa.concluida == true) {
        this.contagemTarefas = this.contagemTarefas + 1
      }
    }
    return this.contagemTarefas
  }

  concluir(tarefa: any) {
    tarefa.concluida = !tarefa.concluida;
    this.atualizar()
  }
}
