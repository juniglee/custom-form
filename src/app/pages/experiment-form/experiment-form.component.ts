import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Form } from '../../model/form.model';
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

    constructor(private formService: FormService, private route: ActivatedRoute) {

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
        console.log(this.form);
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