# Exercício Prático 02

1. Suponha que você esteja construindo um aplicativo para gerenciar tarefas e deseja exibir uma lista de tarefas concluídas e não concluídas

- A "Tarefa" terá as seguintes propriedades:

  - descrição: string

  - concluida: boolean

- No componente que exibe a lista de tarefas, crie um array "tarefas" que contém no mínimo 5 tarefas, sendo algumas concluídas e outras não concluídas.

- Use a diretiva *ngFor para iterar sobre o array "tarefas" e exibir cada tarefa em um elemento HTML `<li>` em uma lista não ordenada.

- Use a diretiva `[ngStyle]` para aplicar um estilo de texto tachado (riscado) nas tarefas concluídas na lista.

- Adicione um botão "Concluir" em cada tarefa da lista que alterna o valor da propriedade "concluida" da tarefa entre verdadeiro e falso.

> Dica: Para aplicar um estilo de texto tachado usando a diretiva `[ngStyle]`, você pode definir uma expressão que retorna um objeto com a propriedade "text-decoration" definida como "line-through" se a tarefa estiver concluída.
