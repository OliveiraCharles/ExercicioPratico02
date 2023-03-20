import { Component } from '@angular/core';

@Component({
  selector: 'app-tatrefas',
  templateUrl: './tatrefas.component.html',
  styleUrls: ['./tatrefas.component.css']
})
export class TatrefasComponent {
  tarefas = [
    { descricao: 'Tarefa 01', concluida: false },
    { descricao: 'Tarefa 02', concluida: false },
    { descricao: 'Tarefa 03', concluida: false },
    { descricao: 'Tarefa 04', concluida: false },
    { descricao: 'Tarefa 05', concluida: false }
  ];
}
