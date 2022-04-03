export class Answer {
    id: string | undefined;
    form: string | undefined;
    name: string | undefined;
    email: string | undefined;
    phone: string | undefined;
    additionalAnswers: Array<AdditionalAnswer> = [];

    constructor(name: string, questions: any, answers: any) {
        if (questions == null || questions == undefined || answers == null || answers == undefined) {
            return;
        }
        this.form = name;
        questions.forEach((question: any) => {
            console.log(question);
            if (question.QuestionName == "Name") {
                this.name = answers["name"];
            }
            else if (question.QuestionName == "Email") {
                this.email = answers["email"];
            }
            else if (question.QuestionName == "Phone") {
                this.phone = answers["phone"];
            }
            else {
                this.additionalAnswers.push(new AdditionalAnswer({
                    question: question.QuestionName,
                    answer: answers[question.QuestionControlName]
                }));
            }
        });
    }
}

export class AdditionalAnswer {
    question: string | undefined;
    answer: string | undefined;

    constructor(obj: any) {
        if (obj == null || obj == undefined) {
            return;
        }
        if (obj.hasOwnProperty("question")) {
            this.question = obj.question;
        }
        if (obj.hasOwnProperty("answer")) {
            this.answer = obj.answer;
        }
    }
}