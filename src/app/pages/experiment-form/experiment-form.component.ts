import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-experiment-form',
    templateUrl: './experiment-form.component.html'
})
export class ExperimentFormComponent {
    form = new FormGroup({});

    formType: string | null | undefined;

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.form = new FormGroup({});
        this.form.addControl("name", new FormControl(''));
        this.form.addControl("email", new FormControl(''));
        this.form.addControl("phone", new FormControl(''));
        /*this.route.paramMap.subscribe(params => {
            this.formType = params.get("formType");
            if (this.formType && this.formKeys.length == 3) {
                switch (this.formType) {
                    case "property-report":
                        console.log("property-report");
                        this.form.addControl("property-report-1", new FormControl(''));
                        this.form.addControl("property-report-2", new FormControl(''));
                        return;
                    case "mover":
                        console.log("mover");
                        this.form.addControl("mover-1", new FormControl(''));
                        this.form.addControl("mover-2", new FormControl(''));
                        return;
                }
            }
        });*/
        this.formType = this.route.snapshot.params['formType'];
        if (this.formType) {
            if (this.formType == "property-report") {
                console.log("property-report");
                this.form.addControl("property-report-1", new FormControl(''));
                this.form.addControl("property-report-2", new FormControl(''));
            }
            else if (this.formType == "mover") {
                console.log("mover");
                this.form.addControl("mover-1", new FormControl(''));
                this.form.addControl("mover-2", new FormControl(''));
            }
        }
    }

    onSubmit() {
        console.log(this.form);
    }

    get formKeys() {
        return Object.keys(this.form.controls);
    }
}