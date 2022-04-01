import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Form } from '../../model/form.model';
import { FormService } from '../../services/form.service';

@Component({
    selector: 'app-experiments',
    templateUrl: './experiments.component.html'
})
export class ExperimentsComponent {
    experiments: Form[] = [];

    constructor(private formService: FormService) {

    }

    ngOnInit() {
        this.formService.getExperiments().subscribe((results: any) => {
            results.forEach((result: any) => {
                this.experiments.push(new Form(result));
            });
        });
    }

    _getCollapseId(experiment: Form) {
        return "collapse_" + experiment.url;
    }
}