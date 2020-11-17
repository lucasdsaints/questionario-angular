import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileQuestionsService } from 'src/app/services/profile-questions.service';

@Component({
  selector: 'app-profile-questionnaire',
  templateUrl: './profile-questionnaire.component.html',
  styleUrls: ['./profile-questionnaire.component.scss']
})
export class ProfileQuestionnaireComponent implements OnInit {
  public investmentsTypesForm: FormGroup;
  public dynamicForm: FormGroup;
  public dynamicQuestions: any;
  private questionIndex = 0;

  constructor(
    private qService: ProfileQuestionsService,
    private fb: FormBuilder
  ) { }

  get questionNextIndex() {
    return ++this.questionIndex;
  }

  ngOnInit(): void {
    this.generateDynamicQuestions();
    this.generateInvestmentsTypesForm();
  }

  generateDynamicQuestions() {
    this.dynamicQuestions = this.qService.getQuestions();
    
    const dynamicQuestions = {};
    this.dynamicQuestions.forEach(question => {
      console.log(question.field)
      dynamicQuestions[question.field] = [null, Validators.required]
    });

    this.dynamicForm = this.fb.group(dynamicQuestions);
  }

  generateInvestmentsTypesForm() {
    this.investmentsTypesForm = this.fb.group({
      rendaFixaTesouroDireto: [null, Validators.required],
      fundosInvestimentos: [null, Validators.required],
      acoesAVista: [null, Validators.required],
      aluguelAcoesTermosOpFuturos: [null, Validators.required]
    });
  }

  showValues() {
    console.log(this.investmentsTypesForm.value)
    console.log(this.dynamicForm.value)
  }

}
