export class Cours {
    public title : string;
    public description? : string;
    public isActive? : boolean;

    constructor(titre : string, description : string, isActive? : boolean) {
        this.title = titre;
        this.description = description;
        this.isActive = isActive;
    }
}