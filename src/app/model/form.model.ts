export class Form {
    Id: string | undefined;
    Name: string | undefined;
    Url: string | undefined;
    IsActive: boolean | undefined;
    Questions: Array<Question> = [];

    constructor(obj: any) {
        if (obj == null || obj == undefined) {
            return;
        }
        if (obj.hasOwnProperty("Id")) {
            this.Id = obj.Id;
        }
        if (obj.hasOwnProperty("Name")) {
            this.Name = obj.Name;
        }
        if (obj.hasOwnProperty("Url")) {
            this.Url = obj.Url;
        }
        if (obj.hasOwnProperty("IsActive")) {
            this.IsActive = obj.IsActive;
        }
        if (obj.hasOwnProperty("Questions")) {
            obj.Questions.forEach((x: any) => {
                this.Questions?.push(new Question(x));
            });
        }
    }
}

export class Question {
    QuestionName: string | undefined;
    QuestionControlName: string | undefined;
    QuestionType: string | undefined;
    Options: Array<Option> | undefined;

    constructor(obj: any) {
        if (obj == null || obj == undefined) {
            return;
        }
        if (obj.hasOwnProperty("QuestionName")) {
            this.QuestionName = obj.QuestionName;
        }
        if (obj.hasOwnProperty("QuestionControlName")) {
            this.QuestionControlName = obj.QuestionControlName;
        }
        if (obj.hasOwnProperty("QuestionType")) {
            this.QuestionType = obj.QuestionType;
        }
        if (obj.hasOwnProperty("Options")) {
            if (obj.Options == null || obj.Options == undefined) {
                return;
            }
            this.Options = [];
            obj.Options.forEach((x: any) => {
                this.Options?.push(new Option(x));
            });
        }        
    }
}

export class Option {
    Key: string | undefined;
    Value: number | undefined;

    constructor(obj: any) {
        if (obj == null || obj == undefined) {
            return;
        }
        if (obj.hasOwnProperty("Key")) {
            this.Key = obj.Key;
        }
        if (obj.hasOwnProperty("Value")) {
            this.Value = obj.Value;
        }
    }
}