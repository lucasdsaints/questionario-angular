import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileQuestionsService {
  private radioQuestions = [
    {
      field: 'investorBehavior',
      question: 'Qual o seu comportamento em relação aos seus investimentos?',
      options: [
        'Preservar meu dinheiro sem correr riscos',
        'Ganhar mais dinheiro assumindo riscos moderados',
        'Ganhar mais dinheiro assumindo riscos agressivos',
      ]
    },
    {
      field: 'expectedInvestmentTime',
      question: 'Por quanto tempo você deseja manter os seus investimentos?',
      options: [
        'Até 1 ano',
        'De 1 a 3 anos',
        'Mais de 3 anos',
      ]
    },
    {
      field: 'percInvestimentNeedYear',
      question: 'Quantos % desses investimentos você pode precisar em um ano?',
      options: [
        'Acima de 75%',
        'De 26% a 74%',
        'Até 25%',
      ]
    },
  ];

  private selectOptions = [
    'Nunca operei',
    'Opero pouco e não tenho familiaridade',
    'Opero eventualmente e conheço os riscos associados',
    'Opero frequentemente e conheço os riscos associados'
  ];

  getQuestions() {
    return this.radioQuestions;
  }

  getSelecOptions() {
    return this.selectOptions;
  }
}
