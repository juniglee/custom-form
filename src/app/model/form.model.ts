export class Form {
    id: string | undefined;
    name: string | undefined;
    url: string | undefined;
    isActive: boolean | undefined;
    questions: Array<Question> = [];

    constructor(obj: any) {
        if (obj == null || obj == undefined) {
            return;
        }
        if (obj.hasOwnProperty("Id")) {
            this.id = obj.Id;
        }
        if (obj.hasOwnProperty("Name")) {
            this.name = obj.Name;
        }
        if (obj.hasOwnProperty("Url")) {
            this.url = obj.Url;
        }
        if (obj.hasOwnProperty("IsActive")) {
            this.isActive = obj.IsActive;
        }
        if (obj.hasOwnProperty("Questions")) {
            obj.Questions.forEach((x: any) => {
                this.questions?.push(new Question(x));
            });
        }
    }
}

export class Question {
    questionName: string | undefined;
    questionControlName: string | undefined;
    questionType: string | undefined;
    options: Array<Option> | undefined;

    constructor(obj: any) {
        if (obj == null || obj == undefined) {
            return;
        }
        if (obj.hasOwnProperty("QuestionName")) {
            this.questionName = obj.QuestionName;
        }
        if (obj.hasOwnProperty("QuestionControlName")) {
            this.questionControlName = obj.QuestionControlName;
        }
        if (obj.hasOwnProperty("QuestionType")) {
            this.questionType = obj.QuestionType;
        }
        if (obj.hasOwnProperty("Options")) {
            if (obj.Options == null || obj.Options == undefined) {
                return;
            }
            this.options = [];
            obj.Options.forEach((x: any) => {
                this.options?.push(new Option(x));
            });
        }        
    }
}

export class Option {
    key: string | undefined;
    value: number | undefined;

    constructor(obj: any) {
        if (obj == null || obj == undefined) {
            return;
        }
        if (obj.hasOwnProperty("Key")) {
            this.key = obj.Key;
        }
        if (obj.hasOwnProperty("Value")) {
            this.value = obj.Value;
        }
    }
}