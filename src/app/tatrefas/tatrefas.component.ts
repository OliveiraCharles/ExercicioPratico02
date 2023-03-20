import { Component } from '@angular/core';

@Component({
  selector: 'app-tatrefas',
  templateUrl: './tatrefas.component.html',
  styleUrls: ['./tatrefas.component.css']
})
export class TatrefasComponent {
  tarefas = [
    { descricao: 'Fazer compras', concluida: true },
    { descricao: 'Lavar o carro', concluida: false },
    { descricao: 'Estudar para a prova', concluida: false },
    { descricao: 'Ir à academia', concluida: true },
    { descricao: 'Fazer o relatório', concluida: false }
  ];
}
