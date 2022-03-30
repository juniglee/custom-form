import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-experiment-form',
    templateUrl: './experiment-form.component.html'
})
export class ExperimentFormComponent {
    form = new FormGroup({
        name: new FormControl(''),
        email: new FormControl(''),
        phone: new FormControl('')
    });
}