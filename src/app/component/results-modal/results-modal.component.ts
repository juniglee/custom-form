import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-results-modal',
    templateUrl: './results-modal.component.html'
})
export class ResultsModalComponent {
    questions: any;
    answers: any;

    constructor(public activeModal: NgbActiveModal) {

    }

    _getAnswer(question: string) {
        return this.answers[question];
    }
}