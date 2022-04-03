import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Answer } from '../model/answer.model';

@Injectable()
export class AnswerService {
    constructor(private http: HttpClient) {

    }

    post(answer: Answer) {
        console.debug("FormService.post");
        var headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        var url = environment.apiUrl + environment.answer;
        return this.http.post<any>(url, answer);
    }
}