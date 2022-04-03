import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Answer } from 'src/app/model/answer.model';
import { Form } from '../../model/form.model';
import { AnswerService } from '../../services/answer.service';
import { FormService } from '../../services/form.service';

@Component({
    selector: 'app-experiment-form',
    templateUrl: './experiment-form.component.html'
})
export class ExperimentFormComponent {
    form = new FormGroup({});

    formType: string | null | undefined;
    formControlData: Form | undefined;

    labelNames: string[] | undefined;
    controlNames: string[] | undefined;

    pageName: string | undefined;

    submitted: boolean = false;

    constructor(private answerService: AnswerService, private formService: FormService, private modalService: NgbModal, private route: ActivatedRoute, private router: Router) {

    }

    ngOnInit() {
        this.form = new FormGroup({});        
        this.formType = this.route.snapshot.params['formType'];
        if (this.formType) {
            this.formService.get(this.formType).subscribe(result => {
                this.formControlData = new Form(result);
                this._initializeForm(this.formControlData);
            });
        }
    }

    _initializeForm(formControlData: Form) {
        formControlData.Questions.forEach(q => {
            let formControlName = q.QuestionControlName ?? '';
            if (q.QuestionName == "Name" || q.QuestionName == "Phone") {
                this.form.addControl(formControlName, new FormControl('', Validators.required));
            }
            else if (q.QuestionType == "email") {
                if (q.QuestionName == "Email") {
                    this.form.addControl(formControlName, new FormControl('', [Validators.required, Validators.email]));

                }
                else {
                    this.form.addControl(formControlName, new FormControl('', [Validators.email]));
                }
            }
            else {
                this.form.addControl(formControlName, new FormControl(''));
            }
        });
    }

    onSubmit() {
        this.submitted = true;
        
        if (this.form.invalid) {
            console.log(this.form);
            return;
        }
        else {
            let answer = new Answer(this.name!, this.formControlData!.Questions, this.form.value);
            this.answerService.post(answer).subscribe(() => {
                this.router.navigate(['/confirmation']);
            });
        }
    }

    _getFormControl(question: any) {
        return this.f[question.QuestionControlName];
    }

    get f() { 
        return this.form.controls; 
    }

    get name() {
        return this.formControlData?.Name;
    }

    get questions() {
        return this.formControlData?.Questions;
    }
}