import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-confirmation-modal',
    templateUrl: './confirmation-modal.component.html'
})
export class ConfirmationModalComponent {
    constructor(public activeModal: NgbActiveModal) {

    }
}