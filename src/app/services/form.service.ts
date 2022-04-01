import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Form } from '../model/form.model';

@Injectable()
export class FormService {
    constructor(private http: HttpClient) {

    }

    get(urlParam: string) {
        console.debug("FormService.get");
        var headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        var url = environment.apiUrl + environment.form + '/' + urlParam;
        return this.http.get(url);
    }

    getExperiments() {
        console.debug("FormService.get");
        var headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        var url = environment.apiUrl + environment.form;
        return this.http.get(url);
    }
}