import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
        formControlData.questions.forEach(q => {
            let formControlName = q.questionControlName ?? '';
            this.form.addControl(formControlName, new FormControl(''));
        });
    }

    onSubmit() {
        console.log(this.form);
    }

    get name() {
        return this.formControlData?.name;
    }

    get questions() {
        return this.formControlData?.questions;
    }
}